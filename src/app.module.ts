import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MarcaModule } from './marca/marca.module'
import { ConfigModule } from '@nestjs/config'
import { CarroController } from './carro/carro.controller'
import { CarroModule } from './carro/carro.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.development',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: process.env.NODE_ENV !== 'production',
            autoLoadEntities: true,
        }),
        MarcaModule,
        CarroModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
