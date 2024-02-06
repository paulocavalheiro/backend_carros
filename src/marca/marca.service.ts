import { Get, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
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
            'Não foi possível buscar as marcas' + error.message
         )
      }
   }

   async findOne(id: number): Promise<Marca> {
      try {
         return this.marcaRepository.findOneBy({ id })
      } catch (error) {
         throw new NotFoundException(
            'Não foi possível buscar a marca' + error.message
         )
      }
   }

   async create(marcaDTO: MarcaDTO) {
      const marca: Marca = new Marca()

      marca.nome = marcaDTO.nome
      return this.marcaRepository.save(marca)
   }

   async update(id: number, marcaDTO: MarcaDTO): Promise<Marca> {
      const marca: Marca = new Marca()

      try {
         marca.nome = marcaDTO.nome
         marca.id = id
         return this.marcaRepository.save(marca)
      } catch (error) {
         throw new NotFoundException(
            'Não foi possível alterar a marca' + error.message
         )
      }
   }

   async remove(id: number): Promise<{ affected?: number }> {
      try {
         return this.marcaRepository.delete(id)
      } catch (error) {
         throw new NotFoundException(
            'Não foi possível remover a marca' + error.message
         )
      }
   }
}
