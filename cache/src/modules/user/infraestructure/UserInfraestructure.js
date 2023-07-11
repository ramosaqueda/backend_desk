"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const neverthrow_1 = require("neverthrow");
const database_bootstrap_1 = __importDefault(require("../../../bootstrap/database.bootstrap"));
const user_exception_1 = require("../domain/exceptions/user.exception");
const user_1 = __importDefault(require("../domain/user"));
const email_VO_1 = require("../domain/value-objects/email.VO");
const user_entity_1 = require("./user.entity");
class UserInfraestructure {
    async insert(user) {
        const userInsert = new user_entity_1.UserEntity();
        const { guid, name, lastname, email, password, refreshToken, active } = user.properties();
        Object.assign(userInsert, {
            guid,
            name,
            lastname,
            email: email.value,
            password,
            refreshToken,
            active,
        });
        await database_bootstrap_1.default.dataSource.getRepository(user_entity_1.UserEntity).save(userInsert);
        return user;
        throw new Error('Method not implemented.');
    }
    async list() {
        const repo = database_bootstrap_1.default.dataSource.getRepository(user_entity_1.UserEntity);
        const result = await repo.find({ where: { active: true } });
        return result.map((el) => {
            const emailResult = email_VO_1.EmailVO.create(el.email);
            if (emailResult.isErr()) {
                throw new user_exception_1.UserEmailInvalidException();
            }
            return new user_1.default({
                guid: el.guid,
                name: el.name,
                lastname: el.lastname,
                email: emailResult.value,
                password: el.password,
                refreshToken: el.refreshToken,
                active: el.active,
            });
        });
    }
    async listOne(guid) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(user_entity_1.UserEntity);
        const result = await repo.findOne({ where: { guid } }); // en emacstipt  moderno se puede  hacer esto en vez de guid:guid
        const emailResult = email_VO_1.EmailVO.create(result.email);
        if (emailResult.isErr()) {
            return (0, neverthrow_1.err)(new user_exception_1.UserEmailInvalidException());
        }
        if (!result) {
            return (0, neverthrow_1.err)(new user_exception_1.UserNotFoundException());
        }
        else {
            return (0, neverthrow_1.ok)(new user_1.default({
                guid: result.guid,
                name: result.name,
                lastname: result.lastname,
                email: emailResult.value,
                password: result.password,
                refreshToken: result.refreshToken,
                active: result.active,
            }));
        }
    }
    async update(guid, user) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(user_entity_1.UserEntity);
        const userFound = await repo.findOne({
            where: { guid },
        });
        if (userFound) {
            Object.assign(userFound, user);
            const UserEntity = await repo.save(userFound);
            const emailResult = email_VO_1.EmailVO.create(UserEntity.email);
            if (emailResult.isErr()) {
                return (0, neverthrow_1.err)(new user_exception_1.UserEmailInvalidException());
            }
            return (0, neverthrow_1.ok)(new user_1.default({
                guid: UserEntity.guid,
                name: UserEntity.name,
                lastname: UserEntity.lastname,
                email: emailResult.value,
                password: UserEntity.password,
                refreshToken: UserEntity.refreshToken,
                active: UserEntity.active,
            }));
        }
    }
    async delete(guid) {
        const repo = database_bootstrap_1.default.dataSource.getRepository(user_entity_1.UserEntity);
        const userFound = await repo.findOne({
            where: { guid },
        });
        if (userFound) {
            userFound.active = false;
            const UserEntity = await repo.save(userFound);
            const emailResult = email_VO_1.EmailVO.create(UserEntity.email);
            if (emailResult.isErr()) {
                return (0, neverthrow_1.err)(new user_exception_1.UserEmailInvalidException());
            }
            return (0, neverthrow_1.ok)(new user_1.default({
                guid: UserEntity.guid,
                name: UserEntity.name,
                lastname: UserEntity.lastname,
                email: emailResult.value,
                password: UserEntity.password,
                refreshToken: UserEntity.refreshToken,
                active: UserEntity.active,
            }));
        }
        else {
            return (0, neverthrow_1.err)(new user_exception_1.UserNotFoundException());
        }
    }
}
exports.default = UserInfraestructure;
//# sourceMappingURL=UserInfraestructure.js.map