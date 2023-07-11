"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const system_factory_1 = __importDefault(require("../../domain/system-factory"));
const url_vo_1 = require("../../domain/value-objects/url.vo");
const system_insert_dto_1 = require("./dto/system-insert.dto");
const system_list_one_dto_1 = require("./dto/system-list-one.dto");
const system_list_dto_1 = require("./dto/system-list.dto");
const system_update_dto_1 = require("./dto/system-update.dto");
const system_delete_dto_1 = require("./dto/system-delete.dto");
class default_1 {
    constructor(application) {
        this.application = application;
        this.insert = this.insert.bind(this);
        this.list = this.list.bind(this);
        this.listOne = this.listOne.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    async insert(req, res, next) {
        const { name, description, url, class_css } = req.body;
        const urlResult = url_vo_1.urlVO.create(url);
        if (urlResult.isErr()) {
            const err = new Error(urlResult.error.message);
            err.status = 411;
            return next(err);
        }
        const systemResult = await new system_factory_1.default().create(name, description, urlResult.value, class_css);
        if (systemResult.isErr()) {
            const err = new Error(systemResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            console.log(systemResult.value);
            const data = await this.application.insert(systemResult.value);
            const result = new system_insert_dto_1.SystemInsertMapping().execute(data.properties());
            res.status(201).json(systemResult);
            //res.status(201).json({ message: 'System created' })
        }
    }
    async list(_req, res) {
        const list = await this.application.list();
        const result = new system_list_dto_1.SystemListMapping().execute(list.map(system => system.properties()));
        res.json(result);
    }
    async listOne(req, res, next) {
        //debemos llamar aplicacion.
        const { id } = req.params;
        const my_id = parseInt(id);
        const systemResult = await this.application.listOne(my_id);
        if (systemResult.isErr()) {
            return res.status(404).json({ message: systemResult.error.message });
        }
        else if (systemResult.isOk()) {
            const result = new system_list_one_dto_1.SystemListOneMapping().execute(systemResult.value.properties());
            //return res.status(200).json(result)
            return res.json(result); //por defecto, cuando el resultado es OK retorna el 200
        }
    }
    async update(req, res, next) {
        const { id } = req.params;
        console.log('el ID es' + id);
        const my_id = parseInt(id);
        const fieldsToUpdate = req.body;
        const dataResult = await this.application.update(my_id, fieldsToUpdate);
        if (dataResult.isErr()) {
            const err = new Error(dataResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            const result = new system_update_dto_1.SystemUpdateMapping().execute(dataResult.value.properties());
            res.status(200).json(result);
        }
    }
    async delete(req, res, next) {
        const id = req.params.id;
        const my_id = parseInt(id);
        const dataResult = await this.application.delete(my_id);
        if (dataResult.isErr()) {
            const err = new Error(dataResult.error.message);
            err.status = 411;
            return next(err);
        }
        else {
            const result = new system_delete_dto_1.SystemDeleteMapping().execute(dataResult.value.properties());
            res.status(200).json(result);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=system.controller.js.map