import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class SystemEntity {
	@PrimaryColumn()
	id: number

	@Column({ type: 'varchar', length: 100 })
	name: string

	@Column({ type: 'varchar', length: 100 })
	url: string

	@Column({ type: 'varchar', length: 100 })
	active: string

	@Column({ type: 'varchar', length: 100 })
	passclass_css: string

}
