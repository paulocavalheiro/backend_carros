"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroBuscaPipe = void 0;
const common_1 = require("@nestjs/common");
class CarroBuscaPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`Parametro ${metadata.data}, não pode ser vazio.`);
        }
        return value;
    }
}
exports.CarroBuscaPipe = CarroBuscaPipe;
//# sourceMappingURL=carroBusca.pipe.js.map