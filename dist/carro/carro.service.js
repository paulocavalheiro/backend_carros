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
exports.CarroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carro_entity_1 = require("./entities/carro.entity");
const typeorm_2 = require("typeorm");
const marca_entity_1 = require("../marca/entities/marca.entity");
let CarroService = class CarroService {
    constructor(carroRepository, marcaRepository) {
        this.carroRepository = carroRepository;
        this.marcaRepository = marcaRepository;
    }
    async findAll() {
        try {
            const carro = await this.carroRepository.find({
                relations: ['marca'],
                order: { nome: 'ASC' },
                where: { ano: (0, typeorm_2.MoreThan)(1920) },
            });
            if (carro.length < 1) {
                throw new common_1.NotFoundException('Nenhum carro cadastrado');
            }
            else {
                return carro;
            }
        }
        catch (error) {
            if (error.response.statusCode === 404) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível listar os carros' + error.message);
            }
        }
    }
    async findOne(nome) {
        try {
            const carro = await this.carroRepository.find({
                where: {
                    nome: nome,
                },
            });
            if (!carro) {
                throw new common_1.NotFoundException(`Carro com nome ${nome} não encontrado.`);
            }
            else {
                return carro;
            }
        }
        catch (error) {
            if (error.response.statusCode === 404) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível buscar o carro' + error.message);
            }
        }
    }
    async create(carroDTO) {
        try {
            const marca = await this.getMarca(carroDTO);
            const carro = new carro_entity_1.Carro();
            carro.nome = carroDTO.nome;
            carro.ano = carroDTO.ano;
            carro.cor = carroDTO.cor;
            carro.marca = marca;
            carro.modelo = carroDTO.modelo;
            carro.tipo_transmissao = carroDTO.tipo_transmissao;
            return this.carroRepository.save(carro);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Erro! não foi possivel cadastrar o carro`);
        }
    }
    async update(id, carroDTO) {
        try {
            const marca = await this.getMarca(carroDTO);
            const carro = new carro_entity_1.Carro();
            carro.nome = carroDTO.nome;
            carro.ano = carroDTO.ano;
            carro.cor = carroDTO.cor;
            carro.marca = marca;
            carro.modelo = carroDTO.modelo;
            carro.tipo_transmissao = carroDTO.tipo_transmissao;
            carro.id = id;
            return this.carroRepository.save(carro);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Não foi possível alterar o carro' + error.message);
        }
    }
    async remove(id) {
        try {
            const carroEncotrado = await this.carroRepository.findOneBy({ id });
            if (!carroEncotrado) {
                throw new common_1.NotFoundException(`Carro id:${id} não possui cadastro.`);
            }
            else {
                return this.carroRepository.delete(id);
            }
        }
        catch (error) {
            if (error.response.statusCode === 404) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('Não foi possível remover o carro' + error.message);
            }
        }
    }
    async getMarca(carroDTO) {
        const marca = await this.marcaRepository.findOne({
            where: {
                nome: carroDTO.marca.nome,
            },
        });
        if (!marca) {
            throw new common_1.NotFoundException('Não foi possivel cadastrar o carro, Marca não encontrada');
        }
        else {
            return marca;
        }
    }
};
CarroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carro_entity_1.Carro)),
    __param(1, (0, typeorm_1.InjectRepository)(marca_entity_1.Marca)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CarroService);
exports.CarroService = CarroService;
//# sourceMappingURL=carro.service.js.map