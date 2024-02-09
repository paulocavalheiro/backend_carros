"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroModule = void 0;
const common_1 = require("@nestjs/common");
const carro_service_1 = require("./carro.service");
const carro_controller_1 = require("./carro.controller");
const typeorm_1 = require("@nestjs/typeorm");
const carro_entity_1 = require("./entities/carro.entity");
const marca_entity_1 = require("../marca/entities/marca.entity");
let CarroModule = class CarroModule {
};
CarroModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([carro_entity_1.Carro]),
            typeorm_1.TypeOrmModule.forFeature([marca_entity_1.Marca]),
        ],
        providers: [carro_service_1.CarroService],
        controllers: [carro_controller_1.CarroController],
    })
], CarroModule);
exports.CarroModule = CarroModule;
//# sourceMappingURL=carro.module.js.map