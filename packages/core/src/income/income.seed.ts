import { DataSource } from 'typeorm';
import { faker } from '@ever-co/faker';
import {
	IOrganization,
	IEmployee,
	ITenant,
	ContactType,
	OrganizationContactBudgetTypeEnum,
	IIncome
} from '@gauzy/contracts';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as path from 'path';
import * as moment from 'moment';
import { environment as env } from '@gauzy/config';
import { Income, OrganizationContact, Tag } from './../core/entities/internal';
import { getDummyImage } from './../core/utils';
import { chain } from 'underscore';

export const createDefaultIncomes = async (
	dataSource: DataSource,
	tenant: ITenant,
	organizations: IOrganization[],
	employees: IEmployee[]
): Promise<Income[]> => {
	let filePath = path.join(
		__dirname,
		...['income-seed-data', 'income-data.csv']
	);
	try {
		filePath = fs.existsSync(filePath)
			? filePath
			: `./income-seed-data/income-data.csv`;
	} catch (error) {
		console.error('Cannot find income data csv');
	}

	const incomeFromFile = [];
	let defaultIncomes = [];

	const { id: tenantId } = tenant;
	for await (const organization of organizations) {
		const { id: organizationId } = organization;
		const tags = await dataSource.manager.findBy(Tag, {
			organizationId
		});
		fs.createReadStream(filePath)
			.pipe(csv())
			.on('data', (data) => incomeFromFile.push(data))
			.on('end', async () => {
				const incomes: IIncome[] = [];
				for await (const seedIncome of incomeFromFile) {
					const income = new Income();
					income.employee = employees.find((emp) => emp.user.email === seedIncome.email);
					income.organization = organization;
					income.tenant = tenant;
					income.amount = seedIncome.amount;
					income.currency = seedIncome.currency || env.defaultCurrency;
					income.notes = seedIncome.notes;
					income.valueDate = moment(
						faker.date.between(
							moment().subtract(3, 'months').calendar(),
							moment().add(10, 'days').calendar()
						)
					)
					.startOf('day')
					.toDate();

					const payload = {
						name: `Client ${seedIncome.clientName}`,
						tenantId: tenantId,
						organizationId: organizationId,
						contactType: ContactType.CLIENT,
						budgetType: OrganizationContactBudgetTypeEnum.HOURS
					}
					income.client = await dataSource.manager.findOne(OrganizationContact, {
						where: {
							...payload
						}
					});
					if (!income.client) {
						/**
						 * Create income related client
						 */
						income.client = await dataSource.manager.save(
							new OrganizationContact({
								...payload,
								imageUrl: getDummyImage(330, 300, (seedIncome.clientName).charAt(0).toUpperCase())
							})
						);
					}
					income.tags = chain(tags)
						.shuffle()
						.take(faker.datatype.number({ min: 1, max: 3 }))
						.values()
						.value();
					incomes.push(income);
				}
				await insertIncome(dataSource, incomes);
			});
	}

	return defaultIncomes;
};

export const createRandomIncomes = async (
	dataSource: DataSource,
	tenants: ITenant[],
	tenantEmployeeMap: Map<ITenant, IEmployee[]>
): Promise<void> => {
	const notes = [
		'Great job!',
		'Well done!',
		'Nice!',
		'Done',
		'Great job!'
	];
	const randomIncomes: Income[] = []
	for (const tenant of tenants || []) {
		const { id: tenantId } = tenant;
		const organizationContacts = await dataSource.manager.findBy(OrganizationContact, {
			tenantId
		});
		const employees = tenantEmployeeMap.get(tenant);
		for (const employee of employees || []) {
			const { id: organizationId } = employee.organization;
			const tags = await dataSource.manager.findBy(Tag, {
				tenantId,
				organizationId
			});
			for (let index = 0; index < 100; index++) {
				const income = new Income();
				const currentIndex = faker.datatype.number({
					min: 0,
					max: index % 5
				});
				income.organization = employee.organization;
				income.tenant = tenant;
				income.employee = employee;
				income.amount = faker.datatype.number({ min: 10, max: 9999 });
				if (organizationContacts.length) {
					income.client = faker.random.arrayElement(organizationContacts);
				}
				income.currency = employee.organization.currency || env.defaultCurrency;
				income.valueDate = moment(
					faker.date.between(
						moment().subtract(3, 'months').calendar(),
						moment().add(10, 'days').calendar()
					)
				)
				.startOf('day')
				.toDate();
				income.notes = notes[currentIndex];
				income.tags = chain(tags)
					.shuffle()
					.take(faker.datatype.number({ min: 1, max: 3 }))
					.values()
					.value();
				randomIncomes.push(income);
			}
		}
	}
	await insertIncome(dataSource, randomIncomes);
	return;
};

const insertIncome = async (
	dataSource: DataSource,
	incomes: Income[]
): Promise<void> => {
	try {
		await dataSource.manager.save(incomes);
	} catch (error) {
		console.log(error);
	}
};
