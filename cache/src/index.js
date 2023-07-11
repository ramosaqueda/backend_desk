"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_bootstrap_1 = __importDefault(require("./bootstrap/server.bootstrap"));
const database_bootstrap_1 = __importDefault(require("./bootstrap/database.bootstrap"));
const app_1 = __importDefault(require("./app"));
const serverBootstrap = new server_bootstrap_1.default(app_1.default);
const databaseBootstrap = new database_bootstrap_1.default();
(async () => {
    try {
        await serverBootstrap.initialize(), console.log('Database started successfully');
        await databaseBootstrap.initialize();
    }
    catch (error) {
        console.log(error);
    }
})();
//# sourceMappingURL=index.js.map