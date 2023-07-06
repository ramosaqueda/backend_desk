import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class SystemEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'varchar', length: 100 })
	name: string

	@Column({ type: 'varchar', length: 300 })
	description: string

	@Column({ type: 'varchar', length: 100 })
	url: string

	@Column({ type: 'varchar', length: 100 })
	class_css: string

	@Column({ type: 'boolean', default: true })
	active: boolean
}
