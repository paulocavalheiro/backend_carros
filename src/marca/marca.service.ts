import {
    BadRequestException,
    Get,
    HttpException,
    HttpStatus,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Not, Repository } from 'typeorm'
import { Marca } from './entities/marca.entity'
import { MarcaDTO } from './dto/marca.dto'

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(Marca)
        private readonly marcaRepository: Repository<Marca>
    ) {}

    async findAll(): Promise<Marca[]> {
        try {
            return this.marcaRepository.find()
        } catch (error) {
            throw new NotFoundException(
                ' Erro! não foi possível buscar as marcas' + error.message
            )
        }
    }

    async findOne(id: number): Promise<Marca> {
        try {
            const marca = await this.marcaRepository.findOneBy({ id })

            if (!marca) {
                throw new NotFoundException(
                    `Marca com id ${id} não encontrada.`
                )
            } else {
                return marca
            }
        } catch (error) {
            if (error.response.statusCode == 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível buscar a marca' + error.message
                )
            }
        }
    }

    async create(marcaDTO: MarcaDTO): Promise<Marca> {
        try {
            const marcaEncontrada = await this.marcaRepository.findOne({
                where: { nome: marcaDTO.nome },
            })

            if (marcaEncontrada) {
                throw new BadRequestException(
                    `marca ${marcaEncontrada.nome} já possui cadastro.`
                )
            } else {
                const marca: Marca = new Marca()

                marca.nome = marcaDTO.nome
                return this.marcaRepository.save(marca)
            }
        } catch (error) {
            if (error.response.statusCode == 400) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível cadastrar a marca' + error.message
                )
            }
        }
    }

    async update(id: number, marcaDTO: MarcaDTO): Promise<Marca> {
        try {
            const marcaEncontrada = await this.marcaRepository.findOne({
                where: { nome: marcaDTO.nome, id: Not(id) },
            })
            if (marcaEncontrada) {
                throw new BadRequestException(
                    `marca ${marcaEncontrada.nome} já possui cadastro.`
                )
            } else {
                const marca: Marca = new Marca()

                marca.nome = marcaDTO.nome
                marca.id = id
                return this.marcaRepository.save(marca)
            }
        } catch (error) {
            if (error.response.statusCode == 400) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível alterar a marca' + error.message
                )
            }
        }
    }

    async remove(id: number): Promise<{ affected?: number }> {
        try {
            const marcaEncontrada = await this.marcaRepository.findOneBy({ id })
            if (!marcaEncontrada) {
                throw new NotFoundException(
                    `marca id:${id} não possui cadastro.`
                )
            } else {
                return this.marcaRepository.delete(id)
            }
        } catch (error) {
            if (error.response.statusCode == 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível remover a marca' + error.message
                )
            }
        }
    }
}
