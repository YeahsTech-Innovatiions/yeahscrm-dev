import {
	Entity,
	Column,
	ManyToOne,
	RelationId,
	JoinColumn,
	OneToMany
} from 'typeorm';
import {
	IKeyResult,
	KeyResultTypeEnum,
	KeyResultDeadlineEnum,
	DeepPartial
} from '@gauzy/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import {
	Employee,
	Goal,
	GoalKPI,
	KeyResultUpdate,
	OrganizationProject,
	Task,
	TenantOrganizationBaseEntity
} from '../internal';

@Entity('key_result')
export class KeyResult
	extends TenantOrganizationBaseEntity
	implements IKeyResult {
	constructor(input?: DeepPartial<KeyResult>) {
		super(input);
	}

	@ApiProperty({ type: String })
	@Column()
	name: string;

	@ApiProperty({ type: String })
	@Column()
	@IsOptional()
	description?: string;

	@ApiProperty({ type: String, enum: KeyResultTypeEnum })
	@IsEnum(KeyResultTypeEnum)
	@Column()
	type: string;

	@ApiProperty({ type: Number })
	@Column({ nullable: true })
	@IsOptional()
	targetValue?: number;

	@ApiProperty({ type: Number })
	@Column({ nullable: true })
	@IsOptional()
	initialValue: number;

	@ApiProperty({ type: String })
	@Column({ nullable: true })
	@IsOptional()
	unit?: string;

	@ApiProperty({ type: Number })
	@Column()
	update: number;

	@ApiProperty({ type: Number })
	@Column()
	progress: number;

	@ApiProperty({ type: Employee })
	@ManyToOne(() => Employee)
	@JoinColumn()
	owner: Employee;

	@ApiProperty({ type: Employee })
	@ManyToOne(() => Employee, { nullable: true })
	@JoinColumn()
	@IsOptional()
	lead?: Employee;

	@ApiProperty({ type: OrganizationProject })
	@ManyToOne(() => OrganizationProject, { nullable: true })
	@JoinColumn({ name: 'projectId' })
	@IsOptional()
	project?: OrganizationProject;

	@ApiProperty({ type: String, readOnly: true })
	@RelationId((keyResult: KeyResult) => keyResult.project)
	@Column({ nullable: true })
	readonly projectId?: string;

	@ApiProperty({ type: Task })
	@ManyToOne(() => Task, { nullable: true })
	@JoinColumn({ name: 'taskId' })
	@IsOptional()
	task?: Task;

	@ApiProperty({ type: String, readOnly: true })
	@RelationId((keyResult: KeyResult) => keyResult.task)
	@Column({ nullable: true })
	readonly taskId?: string;

	@ApiProperty({ type: GoalKPI })
	@ManyToOne(() => GoalKPI, { nullable: true })
	@JoinColumn({ name: 'kpiId' })
	@IsOptional()
	kpi?: GoalKPI;

	@ApiProperty({ type: String, readOnly: true })
	@RelationId((keyResult: KeyResult) => keyResult.kpi)
	@Column({ nullable: true })
	kpiId?: string;

	@ApiProperty({ type: String, enum: KeyResultDeadlineEnum })
	@IsEnum(KeyResultDeadlineEnum)
	@Column()
	deadline: string;

	@ApiProperty({ type: Date })
	@Column({ nullable: true })
	@IsOptional()
	hardDeadline?: Date;

	@ApiProperty({ type: Date })
	@Column({ nullable: true })
	@IsOptional()
	softDeadline?: Date;

	@ApiProperty({ type: String })
	@Column()
	@IsOptional()
	status?: string;

	@ApiProperty({ type: String })
	@Column({ nullable: true })
	@IsOptional()
	weight?: string;

	@ApiProperty({ type: Goal })
	@ManyToOne(() => Goal, (goal) => goal.keyResults, {
		onDelete: 'CASCADE'
	})
	@JoinColumn({ name: 'goalId' })
	goal: Goal;

	@ApiProperty({ type: String, readOnly: true })
	@RelationId((keyResult: KeyResult) => keyResult.goal)
	@Column({ nullable: true })
	readonly goalId?: string;

	@ApiProperty({ type: KeyResultUpdate })
	@OneToMany(
		() => KeyResultUpdate,
		(keyResultUpdate) => keyResultUpdate.keyResult
	)
	@IsOptional()
	updates?: KeyResultUpdate[];
}
