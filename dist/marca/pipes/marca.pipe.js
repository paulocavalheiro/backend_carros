"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaValidacao = void 0;
const common_1 = require("@nestjs/common");
class MarcaValidacao {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`Parametro ${metadata.data}, não pode ser vazio.`);
        }
        return value;
    }
}
exports.MarcaValidacao = MarcaValidacao;
//# sourceMappingURL=marca.pipe.js.map