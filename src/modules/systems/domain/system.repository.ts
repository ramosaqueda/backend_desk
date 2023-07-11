import { Result } from 'neverthrow'
import System from '../domain/system'
import { SystemUpdate } from '../domain/interfaces/systemUpdate.interface'
import { SystemNotFoundException } from '../domain/exceptions/system.exceptions'

export interface SystemRepository {
	insert(system: System): Promise<System>
	list(): Promise<System[]>
	listOne(id: number): Promise<Result<System, SystemNotFoundException>>
	update(id: number, system: Partial<SystemUpdate>): Promise<Result<System, SystemNotFoundException>>
	delete(guidid: number): Promise<Result<System, SystemNotFoundException>>
}
