import { DB_CONFIG } from '../interfaces/dbconfig.interface'


export class AppService {
   static get PORT(): number {
      return +process.env.PORT || 3000
   }

   static get DBConfig(): DB_CONFIG {
      //const pass = process.env.DB_PASS.toString();
      return {
         host: process.env.DB_HOST || 'localhost',
         port: +process.env.DB_PORT || 3308,
         entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: process.env.DB_USER || 'adminUser',
         password: process.env.DB_PASS || '12345',
         database: process.env.DB_NAME || 'bddDesk',
         synchronize: process.env.DB_SYNC ==='true' ? true:false,
         logging: process.env.DB_LOGG ==='true' ? true:false,
         connectionTimeout: +process.env.CONNECTION_TIMEOUT || 3000
      }
   }
}
