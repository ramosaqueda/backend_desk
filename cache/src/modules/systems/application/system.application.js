"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemApplication {
    constructor(systemRepository) {
        this.systemRepository = systemRepository;
    }
    insert(system) {
        return this.systemRepository.insert(system);
    }
    list() {
        return this.systemRepository.list();
    }
    listOne(id) {
        return this.systemRepository.listOne(id);
    }
    update(id, system) {
        return this.systemRepository.update(id, system);
    }
    delete(id) {
        return this.systemRepository.delete(id);
    }
}
exports.default = SystemApplication;
//# sourceMappingURL=system.application.js.map