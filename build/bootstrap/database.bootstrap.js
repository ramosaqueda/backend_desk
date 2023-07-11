"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const base_bootstrap_1 = require("./base.bootstrap");
const user_entity_1 = require("../modules/user/infraestructure/user.entity"); //ingrsar como ruta relativa
const system_entity_1 = require("../modules/systems/infraestructure/system.entity");
let appDataSource;
class default_1 extends base_bootstrap_1.Bootstrap {
    initialize() {
        const AppDataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3308,
            username: 'root',
            password: '12345',
            database: 'bddDesk',
            synchronize: true,
            logging: true,
            entities: [user_entity_1.UserEntity, system_entity_1.SystemEntity],
            migrations: [],
            subscribers: [], // permite definir observadores de procesos.
        });
        appDataSource = AppDataSource;
        return AppDataSource.initialize();
    }
    static get dataSource() {
        return appDataSource;
    }
}
exports.default = default_1;
//# sourceMappingURL=database.bootstrap.js.map