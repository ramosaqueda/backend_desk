"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const database_bootstrap_1 = __importDefault(require("../../../bootstrap/database.bootstrap"));
const system_1 = __importDefault(require("../domain/system"));
const url_vo_1 = require("../domain/value-objects/url.vo");
const system_entity_1 = require("./system.entity");
const system_exceptions_1 = require("../domain/exceptions/system.exceptions");
class SystemInfraestructure {
    constructor() {
        this.delete = async (id) => {
            const repo = database_bootstrap_1.default.dataSource.getRepository(system_entity_1.SystemEntity);
            const systemFound = await repo.findOne({ where: { id } });
            if (systemFound) {
                systemFound.active = false;
                const SystemEntity = await repo.save(systemFound);
                const urlResult = url_vo_1.urlVO.create(SystemEntity.url);
                if (urlResult.isErr()) {
                    return (0, neverthrow_1.err)(new system_exceptions_1.SystemUrlInvalidException());
                }
                return (0, neverthrow_1.ok)(new system_1.default({
                    id: SystemEntity.id,
                    name: SystemEntity.name,
                    description: SystemEntity.description,
                    url: urlResult.value,
                    class_css: SystemEntity.class_css,
                    active: SystemEntity.active,
                }));
            }
            else {
                return (0, neverthrow_1.err)(new system_exceptions_1.SystemNotFoundException());
            }
        };
    }
    async insert(system) {
        const systemInsert = new system_entity_1.SystemEntity();
        const { id, name, description, url, active, class_css } = system.properties();
        Object.assign(systemInsert, {
            id,
            name,
            description,
            url: url.value,
            class_css,
            active,
        });
        await database_bootstrap_1.default.dataSource.getRepository(system_entity_1.SystemEntity).save(systemInsert);
        return system;
        throw new Error('Method not implemented.');
    }
    async list() {
        const repo = database_bootstrap_1.default.dataSource.getRepository(system_entity_1.SystemEntity);
        const result = await repo.find({ where: { active: true } });
        return result.map((el) => {
            const urlResult = url_vo_1.urlVO.create(el.url);
            if (urlResult.isErr()) {
                throw new Error('url invalid');
            }
            return new system_1.default({
                id: el.id,
                name: el.name,
                description: el.description,
                url: urlResult.value,
                class_css: el.class_css,
                active: el.active,
            });
        });
    }
    async listOne(id) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(system_entity_1.SystemEntity);
        const result = await repo.findOne({ where: { id } });
        const urllResult = url_vo_1.urlVO.create(result.url);
        if (urllResult.isErr()) {
            throw new Error('url invalid');
        }
        if (!result) {
            return (0, neverthrow_1.err)(new Error('System not found'));
        }
        else {
            return (0, neverthrow_1.ok)(new system_1.default({
                id: result.id,
                name: result.name,
                description: result.description,
                url: urllResult.value,
                class_css: result.class_css,
                active: result.active,
            }));
        }
    }
    async update(id, system) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(system_entity_1.SystemEntity);
        const systemFound = await repo.findOne({ where: { id } });
        if (systemFound) {
            Object.assign(systemFound, system);
            const SystemEntity = await repo.save(systemFound);
            const urlResult = url_vo_1.urlVO.create(SystemEntity.url);
            if (urlResult.isErr()) {
                return (0, neverthrow_1.err)(new system_exceptions_1.SystemUrlInvalidException());
            }
            return (0, neverthrow_1.ok)(new system_1.default({
                id: SystemEntity.id,
                name: SystemEntity.name,
                description: SystemEntity.description,
                url: urlResult.value,
                class_css: SystemEntity.class_css,
                active: SystemEntity.active,
            }));
        }
    }
}
exports.default = SystemInfraestructure;
//# sourceMappingURL=SystemInfraestructure.js.map