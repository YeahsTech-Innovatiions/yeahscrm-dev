import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DeepPartial, IProductOption } from '@gauzy/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Product, TenantOrganizationBaseEntity } from '../internal';

@Entity('product_option')
export class ProductOption
	extends TenantOrganizationBaseEntity
	implements IProductOption {
	constructor(input?: DeepPartial<ProductOption>) {
		super(input);
	}

	@ApiProperty({ type: String })
	@IsString()
	@Column()
	name: string;

	@ApiProperty({ type: String })
	@IsString()
	@Column()
	code: string;

	@ManyToOne(() => Product, (product) => product.options, {
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE'
	})
	@JoinColumn()
	product: Product;
}
