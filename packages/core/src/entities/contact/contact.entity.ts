import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';
import {
	DeepPartial,
	ICandidate,
	IContact,
	IEmployee,
	IOrganizationContact
} from '@gauzy/common';
import {
	Candidate,
	Employee,
	OrganizationContact,
	TenantOrganizationBaseEntity
} from '../internal';

@Entity('contact')
export class Contact extends TenantOrganizationBaseEntity implements IContact {
	constructor(input?: DeepPartial<Contact>) {
		super(input);
	}

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	name?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	firstName?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	lastName?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	country?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	city?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	address?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	address2?: string;

	@ApiPropertyOptional({ type: Number })
	@IsNumber()
	@IsOptional()
	@Column({ nullable: true })
	postcode?: number;

	@ApiPropertyOptional({ type: Number })
	@IsNumber()
	@IsOptional()
	@Column({ nullable: true, type: 'float', scale: 6 })
	latitude?: number;

	@ApiPropertyOptional({ type: Number })
	@IsNumber()
	@IsOptional()
	@Column({ nullable: true, type: 'float', scale: 6 })
	longitude?: number;

	@ApiProperty({ type: String })
	@Column()
	@IsOptional()
	@Column({ nullable: true })
	regionCode?: string;

	@ApiPropertyOptional({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	fax?: string;

	@ApiPropertyOptional({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	fiscalInformation?: string;

	@ApiPropertyOptional({ type: String })
	@IsString()
	@IsOptional()
	@Column({ nullable: true })
	website?: string;

	@ApiProperty({ type: OrganizationContact })
	@OneToMany(
		() => OrganizationContact,
		(organizationContact) => organizationContact.contact,
		{
			onDelete: 'SET NULL'
		}
	)
	public organization_contacts?: IOrganizationContact[];

	@ApiProperty({ type: Employee })
	@OneToMany(() => Employee, (employee) => employee.contact)
	public employees?: IEmployee[];

	@ApiProperty({ type: Candidate })
	@OneToMany(() => Candidate, (candidate) => candidate.contact, {
		onDelete: 'SET NULL'
	})
	public candidates?: ICandidate[];
}
