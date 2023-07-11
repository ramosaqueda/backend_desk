import { DbConfig } from '../interfaces/dbconfig.interface'
import yenv from 'yenv'

const env = yenv('.env')

export class AppService {
   static get PORT(): number {
      return +env.PORT || 3000
   }

   static get DBConfig(): DbConfig {
      const pass = env.DB_PASS.toString();
      return {
         host: env.DB_HOST || 'localhost',
         port: +env.DB_PORT || 3308,
         entities: [env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: env.DB_USER || 'adminUser',
         password: pass || '12345',
         database: env.DB_NAME || 'bddDesk',
         synchronize: env.DB_SYNC || false,
         logging: env.DB_LOGG || false,
         connectionTimeout: +env.CONNECTION_TIMEOUT || 3000
      }
   }
}
