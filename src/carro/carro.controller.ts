import { Controller, Get } from '@nestjs/common'
import { CarroService } from './carro.service'
import { Carro } from './entities/carro.entity'

@Controller('api/carro')
export class CarroController {
    constructor(private readonly carroService: CarroService) {}
    @Get('listar')
    async getMarcas(): Promise<Carro[]> {
        return this.carroService.findAll()
    }
}
