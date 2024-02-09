import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { CarroService } from './carro.service'
import { Carro } from './entities/carro.entity'
import { CarroDTO } from './dto/carro.dto'
import { CarroBuscaPipe } from './pipes/carroBusca.pipe'

@Controller('api/carro')
export class CarroController {
    constructor(private readonly carroService: CarroService) {}

    @Get('listar')
    async getCarros(): Promise<Carro[]> {
        return this.carroService.findAll()
    }

    @Get('buscaCarro/:nome')
    @UsePipes(new CarroBuscaPipe())
    async getcarro(@Param('nome') nome: string): Promise<Carro[]> {
        return this.carroService.findOne(nome)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createCarro(@Body() carroDTO: CarroDTO) {
        return this.carroService.create(carroDTO)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateCarro(@Param('id') id: string, @Body() carroDto: CarroDTO) {
        return this.carroService.update(+id, carroDto)
    }

    @Delete(':id')
    async removeCarro(@Param('id') id: string) {
        return this.carroService.remove(+id)
    }
}
