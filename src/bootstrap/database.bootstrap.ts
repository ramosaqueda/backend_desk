import { DataSource } from 'typeorm'
import { Bootstrap } from './base.bootstrap'
import { AppService } from './services/app.service'
import { DB_CONFIG } from './interfaces/dbconfig.interface'


let appDataSource: DataSource

export default class extends Bootstrap {
  initialize(): Promise<DataSource> {
    const dbConfig: DB_CONFIG = AppService.DBConfig
	 console.log(dbConfig.entities)

    const AppDataSource = new DataSource({
      type: 'mysql',
      ...dbConfig,
    })

    appDataSource = AppDataSource

    return AppDataSource.initialize()
  }

  static get dataSource(): DataSource {
    return appDataSource
  }
}
