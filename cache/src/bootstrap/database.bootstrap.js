"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const base_bootstrap_1 = require("./base.bootstrap");
const app_service_1 = require("./services/app.service");
let appDataSource;
class default_1 extends base_bootstrap_1.Bootstrap {
    initialize() {
        const dbConfig = app_service_1.AppService.DBConfig;
        const AppDataSource = new typeorm_1.DataSource({
            type: 'mysql',
            ...dbConfig,
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