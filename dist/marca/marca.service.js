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
exports.MarcaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const marca_entity_1 = require("./entities/marca.entity");
let MarcaService = class MarcaService {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    async findAll() {
        try {
            return this.marcaRepository.find();
        }
        catch (error) {
            throw new common_1.NotFoundException(' Erro! não foi possível listar as marcas' + error.message);
        }
    }
    async findOne(id) {
        try {
            const marca = await this.marcaRepository.findOneBy({ id });
            if (!marca) {
                throw new common_1.NotFoundException(`Marca com id ${id} não encontrada.`);
            }
            else {
                return marca;
            }
        }
        catch (error) {
            if (error.response.statusCode === 404) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível buscar a marca' + error.message);
            }
        }
    }
    async create(marcaDTO) {
        try {
            const marcaEncontrada = await this.marcaRepository.findOne({
                where: { nome: marcaDTO.nome },
            });
            if (marcaEncontrada) {
                throw new common_1.BadRequestException(`marca ${marcaEncontrada.nome} já possui cadastro.`);
            }
            else {
                const marca = new marca_entity_1.Marca();
                marca.nome = marcaDTO.nome;
                return this.marcaRepository.save(marca);
            }
        }
        catch (error) {
            if (error.response.statusCode === 400) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível cadastrar a marca' + error.message);
            }
        }
    }
    async update(id, marcaDTO) {
        try {
            const marcaEncontrada = await this.marcaRepository.findOne({
                where: { nome: marcaDTO.nome, id: (0, typeorm_2.Not)(id) },
            });
            if (marcaEncontrada) {
                throw new common_1.BadRequestException(`marca ${marcaEncontrada.nome} já possui cadastro.`);
            }
            else {
                const marca = new marca_entity_1.Marca();
                marca.nome = marcaDTO.nome;
                marca.id = id;
                return this.marcaRepository.save(marca);
            }
        }
        catch (error) {
            if (error.response.statusCode === 400) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível alterar a marca' + error.message);
            }
        }
    }
    async remove(id) {
        try {
            const marcaEncontrada = await this.marcaRepository.findOneBy({ id });
            if (!marcaEncontrada) {
                throw new common_1.NotFoundException(`marca id:${id} não possui cadastro.`);
            }
            else {
                return this.marcaRepository.delete(id);
            }
        }
        catch (error) {
            if (error.response.statusCode === 404) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível remover a marca' + error.message);
            }
        }
    }
};
MarcaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marca_entity_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcaService);
exports.MarcaService = MarcaService;
//# sourceMappingURL=marca.service.js.map