import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { ICandidateEducation, ICandidate, DeepPartial } from '@gauzy/common';
import { Candidate, TenantOrganizationBaseEntity } from '../internal';

@Entity('candidate_education')
export class CandidateEducation
	extends TenantOrganizationBaseEntity
	implements ICandidateEducation {
	constructor(input?: DeepPartial<CandidateEducation>) {
		super(input);
	}

	@ApiProperty({ type: String })
	@Column()
	schoolName: string;

	@ApiProperty({ type: String })
	@Column()
	degree: string;

	@ApiProperty({ type: String })
	@Column()
	field: string;

	@ApiProperty({ type: Date })
	@Column()
	completionDate: Date;

	@ApiProperty({ type: String })
	@Column({ nullable: true })
	notes?: string;

	@ApiProperty({ type: String })
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: true })
	candidateId?: string;

	@ManyToOne(() => Candidate, (candidate) => candidate.educations, {
		onDelete: 'CASCADE'
	})
	candidate: ICandidate;
}
