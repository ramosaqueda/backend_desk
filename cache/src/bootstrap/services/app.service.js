"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const yenv_1 = __importDefault(require("yenv"));
const env = (0, yenv_1.default)('.env');
class AppService {
    static get PORT() {
        return +env.PORT || 3000;
    }
    static get DBConfig() {
        const pass = env.DB_PASS.toString();
        return {
            host: env.DB_HOST || 'cont-mysqlserver',
            port: +env.DB_PORT || 3306,
            //entities: [process.env.DB_ENTITIES || 'src/**/*.entity.ts'],
            entities: [env.DB_ENTITIES || 'dist/**/*.entity.js'],
            username: env.DB_USER || 'adminUser',
            password: pass || '12345',
            database: env.DB_NAME || 'bddDesk',
            synchronize: env.DB_SYNC || false,
            logging: env.DB_LOGG || false,
            connectionTimeout: +env.CONNECTION_TIMEOUT || 3000
        };
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map