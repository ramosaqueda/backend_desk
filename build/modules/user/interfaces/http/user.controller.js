"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_factory_1 = __importDefault(require("../../domain/user-factory"));
const email_VO_1 = require("../../domain/value-objects/email.VO");
const guid_vo_1 = require("../../domain/value-objects/guid.vo");
const user_insert_dto_1 = require("./dto/user-insert.dto");
const user_list_one_dto_1 = require("./dto/user-list-one.dto");
const user_update_dto_1 = require("./dto/user-update.dto");
const user_delete_dto_1 = require("./dto/user-delete.dto");
const user_list_dto_1 = require("./dto/user-list.dto");
class default_1 {
    constructor(application) {
        this.application = application;
        // Design Pattern Mediator: https://refactoring.guru/es/design-patterns/mediator
        this.insert = this.insert.bind(this); //desde la especificacion desde este controlador, cuando se llame desde afuera, apunte a una referencia de esta clases/ esto simplifica las rutas
        this.list = this.list.bind(this);
        this.listOne = this.listOne.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    /*La función next() es un argumento que se pasa a cada función de middleware en Express. Cuando se llama a next(), le indica a Express que pase el
control a la siguiente función de middleware.
Esto es útil cuando deseas ejecutar una serie de funciones de midd
 leware en orden, donde cada una realiza una tarea específica.
*/
    async insert(req, res, next) {
        const { name, lastname, email, password } = req.body;
        const emailResult = email_VO_1.EmailVO.create(email);
        if (emailResult.isErr()) {
            const err = new Error(emailResult.error.message);
            err.status = 411;
            return next(err);
        }
        const userResult = await new user_factory_1.default().create(name, lastname, emailResult.value, password);
        if (userResult.isErr()) {
            const err = new Error(userResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            const data = await this.application.insert(userResult.value);
            const result = new user_insert_dto_1.UserInsertMapping().execute(data.properties());
            res.status(201).json(result);
        }
    }
    async list(_req, res) {
        const list = await this.application.list();
        const result = new user_list_dto_1.UserListMapping().execute(list.map(user => user.properties()));
        res.json(result);
    }
    async listOne(req, res, next) {
        //debemos llamar aplicacion.
        const { guid } = req.params;
        const guiResult = guid_vo_1.GuidVO.create(guid);
        if (guiResult.isErr()) {
            const err = new Error(guiResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            const userResult = await this.application.listOne(guid);
            if (userResult.isErr()) {
                return res.status(404).json({ message: userResult.error.message });
            }
            else if (userResult.isOk()) {
                const result = new user_list_one_dto_1.UserListOneMapping().execute(userResult.value.properties());
                //return res.status(200).json(result)
                return res.json(result); //por defecto, cuando el resultado es OK retorna el 200
            }
        }
    }
    async update(req, res, next) {
        const { guid } = req.params;
        const fieldsToUpdate = req.body; //objeto con los rgistros que desamos modificar
        const guidResult = guid_vo_1.GuidVO.create(guid);
        if (guidResult.isErr()) {
            const err = new Error(guidResult.error.message);
            err.status = 411;
            return next(err);
        }
        const dataResult = await this.application.update(guid, fieldsToUpdate);
        if (dataResult.isErr()) {
            const err = new Error(dataResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            const result = new user_update_dto_1.UserUpdateMapping().execute(dataResult.value.properties());
            return res.json(result);
        }
    }
    async delete(req, res, next) {
        const guid = req.params.guid;
        const guidResult = guid_vo_1.GuidVO.create(guid);
        if (guidResult.isErr()) {
            const err = new Error(guidResult.error.message);
            err.status = 411;
            return next(err);
        }
        const dataResult = await this.application.delete(guid);
        if (dataResult.isErr()) {
            const err = new Error(dataResult.error.message);
            err.status = 404;
            return next(err);
        }
        else {
            const result = new user_delete_dto_1.UserDeleteMapping().execute(dataResult.value.properties());
            return res.json(result);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=user.controller.js.map