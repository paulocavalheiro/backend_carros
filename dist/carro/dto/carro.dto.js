"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDTO = void 0;
const class_validator_1 = require("class-validator");
class CarroDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo nome não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo nome deve ser string' }),
    __metadata("design:type", String)
], CarroDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo ano não pode ser vazio' }),
    (0, class_validator_1.IsInt)({ message: 'O campo ano deve ser um número inteiro' }),
    (0, class_validator_1.Min)(1910, { message: 'O campo ano deve ser maior ou igual a 1910' }),
    (0, class_validator_1.Max)(new Date().getFullYear(), {
        message: 'O campo ano deve ser menor ou igual ao ano atual',
    }),
    __metadata("design:type", Number)
], CarroDTO.prototype, "ano", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo cor não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo cor deve ser string' }),
    __metadata("design:type", String)
], CarroDTO.prototype, "cor", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo modelo não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo modelo deve ser string' }),
    __metadata("design:type", String)
], CarroDTO.prototype, "modelo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O campo tipo transmissao não pode ser vazio' }),
    (0, class_validator_1.IsString)({ message: 'O campo tipo transmissao deve ser string' }),
    __metadata("design:type", String)
], CarroDTO.prototype, "tipo_transmissao", void 0);
exports.CarroDTO = CarroDTO;
//# sourceMappingURL=carro.dto.js.map