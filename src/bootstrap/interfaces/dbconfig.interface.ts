export interface DbConfig {
	host: string,
	port: number,
	entities: string[],
	username: string,
	password: string,
	database: string,
	synchronize: boolean,
	logging: true,
	connectionTimeout: number

}
