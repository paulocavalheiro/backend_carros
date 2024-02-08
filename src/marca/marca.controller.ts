import {
    Body,
    ConsoleLogger,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { MarcaService } from './marca.service'
import { Marca } from './entities/marca.entity'
import { MarcaDTO } from './dto/marca.dto'
import { MarcaValidacao } from './pipes/marca.pipe'
import { Transform } from 'class-transformer'

@Controller('api/marca')
export class MarcaController {
    constructor(private readonly marcaService: MarcaService) {}

    @Get('listar')
    async getMarcas(): Promise<Marca[]> {
        return this.marcaService.findAll()
    }

    @Get(':id')
    // @UsePipes(new MarcaValidacao())
    async getMarca(@Param('id') id: string): Promise<Marca> {
        return this.marcaService.findOne(+id)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createMarca(@Body() marcaDTO: MarcaDTO) {
        return this.marcaService.create(marcaDTO)
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id: string, @Body() MarcaDTO: MarcaDTO) {
        return this.marcaService.update(+id, MarcaDTO)
    }

    @Delete(':id')
    async removeMarca(@Param('id') id: string) {
        return this.marcaService.remove(+id)
    }
}
