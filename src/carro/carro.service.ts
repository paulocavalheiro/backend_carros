import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Carro } from './entities/carro.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CarroService {
    constructor(
        @InjectRepository(Carro)
        private readonly CarroRepository: Repository<Carro>
    ) {}

    async findAll(): Promise<Carro[]> {
        try {
            const carro = await this.CarroRepository.find()

            if (carro.length < 1) {
                throw new NotFoundException('Nenhum carro cadastrado')
            } else {
                return carro
            }
        } catch (error) {
            if (error.response.statusCode == 404) {
                throw error
            } else {
                throw new InternalServerErrorException(
                    'Não foi possível listar os carros' + error.message
                )
            }
        }
    }
}
