"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = __importDefault(require("./system"));
const neverthrow_1 = require("neverthrow");
const system_exceptions_1 = require("./exceptions/system.exceptions");
class SystemFactory {
    async create(name, description, url, class_css) {
        if (!name) {
            return (0, neverthrow_1.err)(new system_exceptions_1.SystemNameRequiredException());
        }
        if (!description) {
            return (0, neverthrow_1.err)(new system_exceptions_1.SystemDescriptionRequiredException());
        }
        if (!url) {
            return (0, neverthrow_1.err)(new system_exceptions_1.SystemUrlRequiredException());
        }
        const systemProperties = {
            name,
            description,
            url,
            class_css,
        };
        const system = new system_1.default(systemProperties);
        return (0, neverthrow_1.ok)(system);
    }
}
exports.default = SystemFactory;
//# sourceMappingURL=system-factory.js.map