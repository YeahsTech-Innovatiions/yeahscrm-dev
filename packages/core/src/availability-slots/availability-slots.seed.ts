import { DataSource } from 'typeorm';
import { faker } from '@ever-co/faker';
import * as moment from 'moment';
import { AvailabilitySlotType, IEmployee, IOrganization, ITenant } from '@gauzy/contracts';
import { AvailabilitySlot } from './availability-slots.entity';

export const createDefaultAvailabilitySlots = async (
	dataSource: DataSource,
	tenants: ITenant[],
	organization: IOrganization,
	employees,
	noOfAvailabilitySlotsPerOrganization: number
): Promise<AvailabilitySlot[]> => {
	let slots: AvailabilitySlot[] = [];
	for (const tenant of tenants) {
		slots = await dataOperation(
			dataSource,
			slots,
			noOfAvailabilitySlotsPerOrganization,
			employees,
			organization,
			tenant
		);
	}
	return slots;
};

export const createRandomAvailabilitySlots = async (
	dataSource: DataSource,
	tenants: ITenant[],
	tenantOrganizationsMap: Map<ITenant, IOrganization[]>,
	tenantEmployeeMap: Map<ITenant, IEmployee[]>,
	noOfAvailabilitySlotsPerOrganization: number
): Promise<AvailabilitySlot[]> => {
	let slots: AvailabilitySlot[] = [];
	for (const tenant of tenants) {
		const organizations = tenantOrganizationsMap.get(tenant);
		const employees = tenantEmployeeMap.get(tenant);
		for (const organization of organizations) {
			slots = await dataOperation(
				dataSource,
				slots,
				noOfAvailabilitySlotsPerOrganization,
				employees,
				organization,
				tenant
			);
		}
	}
	return slots;
};

const dataOperation = async (
	dataSource: DataSource,
	slots,
	noOfAvailabilitySlotsPerOrganization,
	employees,
	organization,
	tenant
) => {
	for (let i = 0; i < noOfAvailabilitySlotsPerOrganization; i++) {
		const slot = new AvailabilitySlot();
		slot.allDay = faker.datatype.boolean();
		slot.employee = faker.random.arrayElement([
			faker.random.arrayElement(employees),
			null
		]);
		slot.organization = organization;
		slot.tenant = tenant;
		slot.startTime = faker.date.between(
			new Date(),
			moment(new Date()).add(2, 'months').toDate()
		);
		slot.endTime = faker.date.between(
			slot.startTime,
			moment(slot.startTime).add(7, 'hours').toDate()
		);
		slot.type = faker.random.arrayElement(
			Object.values(AvailabilitySlotType)
		);
		slots.push(slot);
	}
	await dataSource.manager.save(slots);
	return slots;
};
