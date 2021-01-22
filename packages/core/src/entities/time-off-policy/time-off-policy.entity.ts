import { Entity, Index, Column, ManyToMany, JoinTable } from 'typeorm';
import { DeepPartial, ITimeOffPolicy } from '@gauzy/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { Employee, TenantOrganizationBaseEntity } from '../internal';

@Entity('time_off_policy')
export class TimeOffPolicy
	extends TenantOrganizationBaseEntity
	implements ITimeOffPolicy {
	constructor(input?: DeepPartial<TimeOffPolicy>) {
		super(input);
	}

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Index()
	@Column()
	name: string;

	@ApiProperty({ type: Boolean })
	@IsBoolean()
	@Column()
	requiresApproval: boolean;

	@ApiProperty({ type: Boolean })
	@IsBoolean()
	@Column()
	paid: boolean;

	@ManyToMany(() => Employee, { cascade: ['update'] })
	@JoinTable({
		name: 'time_off_policy_employee'
	})
	employees?: Employee[];
}
