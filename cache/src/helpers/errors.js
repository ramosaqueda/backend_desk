"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static notFound(req, res) {
        res.status(404).send('Ruta no encontrada');
    }
    static genericError(error, _req, res) {
        res.status(error.status || 500).json({
            message: error.message,
            stack: error.stack,
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=errors.js.map