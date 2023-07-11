"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserApplication {
    //Principio solid: Inversión de depenecias. dependemos del repositorio
    //Patrón de diseño: injection dependeny, que permite aplicar el principio solid anteior https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    insert(user) {
        return this.userRepository.insert(user);
    }
    list() {
        return this.userRepository.list();
    }
    listOne(guid) {
        return this.userRepository.listOne(guid);
    }
    update(guid, user) {
        return this.userRepository.update(guid, user);
    }
    delete(guid) {
        return this.userRepository.delete(guid);
    }
}
exports.default = UserApplication;
//# sourceMappingURL=user.application.js.map