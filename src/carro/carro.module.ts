import { Module } from '@nestjs/common'
import { CarroService } from './carro.service'
import { CarroController } from './carro.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Carro } from './entities/carro.entity'
import { Marca } from 'src/marca/entities/marca.entity'

@Module({
    imports: [
        TypeOrmModule.forFeature([Carro]),
        TypeOrmModule.forFeature([Marca]),
    ],
    providers: [CarroService],
    controllers: [CarroController],
})
export class CarroModule {}
