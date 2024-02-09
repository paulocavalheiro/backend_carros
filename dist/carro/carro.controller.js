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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroController = void 0;
const common_1 = require("@nestjs/common");
const carro_service_1 = require("./carro.service");
const carro_dto_1 = require("./dto/carro.dto");
const carroBusca_pipe_1 = require("./pipes/carroBusca.pipe");
let CarroController = class CarroController {
    constructor(carroService) {
        this.carroService = carroService;
    }
    async getCarros() {
        return this.carroService.findAll();
    }
    async getcarro(nome) {
        return this.carroService.findOne(nome);
    }
    async createCarro(carroDTO) {
        return this.carroService.create(carroDTO);
    }
    async updateCarro(id, carroDto) {
        return this.carroService.update(+id, carroDto);
    }
    async removeCarro(id) {
        return this.carroService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('listar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarroController.prototype, "getCarros", null);
__decorate([
    (0, common_1.Get)('buscaCarro/:nome'),
    (0, common_1.UsePipes)(new carroBusca_pipe_1.CarroBuscaPipe()),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarroController.prototype, "getcarro", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carro_dto_1.CarroDTO]),
    __metadata("design:returntype", Promise)
], CarroController.prototype, "createCarro", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, carro_dto_1.CarroDTO]),
    __metadata("design:returntype", Promise)
], CarroController.prototype, "updateCarro", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarroController.prototype, "removeCarro", null);
CarroController = __decorate([
    (0, common_1.Controller)('api/carro'),
    __metadata("design:paramtypes", [carro_service_1.CarroService])
], CarroController);
exports.CarroController = CarroController;
//# sourceMappingURL=carro.controller.js.map