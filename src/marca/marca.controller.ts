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
} from '@nestjs/common'
import { MarcaService } from './marca.service'
import { Marca } from './entities/marca.entity'
import { MarcaDTO } from './dto/marca.dto'

@Controller('api/marca')
export class MarcaController {
   constructor(private readonly marcaService: MarcaService) {}

   @Get('listar')
   async getMarcas(): Promise<Marca[]> {
      return this.marcaService.findAll()
   }

   @Get(':id')
   async getMarca(@Param('id') id: string): Promise<Marca> {
      return this.marcaService.findOne(+id)
   }

   @Post()
   async createMarca(@Body() marcaDTO: MarcaDTO) {
      return this.marcaService.create(marcaDTO)
   }

   @Put(':id')
   async update(@Param('id') id: string, @Body() MarcaDTO: MarcaDTO) {
      console.log('alterado')
      return this.marcaService.update(+id, MarcaDTO)
   }

   @Delete(':id')
   async removeMarca(@Param('id') id: string) {
      return this.marcaService.remove(+id)
   }
}
