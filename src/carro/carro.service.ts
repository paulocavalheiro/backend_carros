import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Carro } from './entities/carro.entity'
import { MoreThan, Not, Repository } from 'typeorm'
import { CarroDTO } from './dto/carro.dto'
import { Marca } from 'src/marca/entities/marca.entity'

@Injectable()
export class CarroService {
    constructor(
        @InjectRepository(Carro)
        private readonly carroRepository: Repository<Carro>,
        @InjectRepository(Marca)
        private readonly marcaRepository: Repository<Marca>
    ) {}

    async findAll(): Promise<Carro[]> {
        try {
            const carro = await this.carroRepository.find({
                relations: ['marca'],
                order: { nome: 'ASC' },
                where: { ano: MoreThan(1920) },
            })

            if (carro.length < 1) {
                throw new NotFoundException('Nenhum carro cadastrado')
            } else {
                return carro
            }
        } catch (error) {
            if (error.response.statusCode === 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível listar os carros' + error.message
                )
            }
        }
    }

    async findOne(nome: string) {
        try {
            const carro = await this.carroRepository.find({
                where: {
                    nome: nome,
                },
            })

            if (!carro) {
                throw new NotFoundException(
                    `Carro com nome ${nome} não encontrado.`
                )
            } else {
                return carro
            }
        } catch (error) {
            if (error.response.statusCode === 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível buscar o carro' + error.message
                )
            }
        }
    }

    async create(carroDTO: CarroDTO): Promise<Carro> {
        try {
            const marca = await this.getMarca(carroDTO)

            const carro: Carro = new Carro()
            carro.nome = carroDTO.nome
            carro.ano = carroDTO.ano
            carro.cor = carroDTO.cor
            carro.marca = marca
            carro.modelo = carroDTO.modelo
            carro.tipo_transmissao = carroDTO.tipo_transmissao
            return this.carroRepository.save(carro)
        } catch (error) {
            throw new InternalServerErrorException(
                `Erro! não foi possivel cadastrar o carro`
            )
        }
    }

    async update(id: number, carroDTO: CarroDTO): Promise<Carro> {
        try {
            const marca = await this.getMarca(carroDTO)

            const carro: Carro = new Carro()
            carro.nome = carroDTO.nome
            carro.ano = carroDTO.ano
            carro.cor = carroDTO.cor
            carro.marca = marca
            carro.modelo = carroDTO.modelo
            carro.tipo_transmissao = carroDTO.tipo_transmissao
            carro.id = id
            return this.carroRepository.save(carro)
        } catch (error) {
            throw new InternalServerErrorException(
                'Não foi possível alterar o carro' + error.message
            )
        }
    }

    async remove(id: number): Promise<{ affected?: number }> {
        try {
            const carroEncotrado = await this.carroRepository.findOneBy({ id })
            if (!carroEncotrado) {
                throw new NotFoundException(
                    `Carro id:${id} não possui cadastro.`
                )
            } else {
                return this.carroRepository.delete(id)
            }
        } catch (error) {
            if (error.response.statusCode === 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível remover o carro' + error.message
                )
            }
        }
    }

    async getMarca(carroDTO: CarroDTO): Promise<Marca> {
        const marca = await this.marcaRepository.findOne({
            where: {
                nome: carroDTO.marca.nome,
            },
        })
        if (!marca) {
            throw new NotFoundException(
                'Não foi possivel cadastrar o carro, Marca não encontrada'
            )
        } else {
            return marca
        }
    }
}
