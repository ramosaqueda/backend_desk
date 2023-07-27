import { Result } from 'neverthrow'
import User from './user'
import { UserUpdate } from './interfaces/userUpdate.interface'
import { UserNotFoundException } from './exceptions/user.exception'

export interface UserRepository {
	insert(user: User): Promise<User>
	list(): Promise<User[]>
	listOne(guid: string): Promise<Result<User, UserNotFoundException>> //ejemplo para retornar un resultado con sus codigos de exepcion usando neverthrow.+
	update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>> //partial es un utilitario que permite pasar estructura de datos y utilizar en forma parcial
	delete(guid: string): Promise<Result<User, UserNotFoundException>> //si el guid no existe, pedimos que nos retorne la excepción.
}
