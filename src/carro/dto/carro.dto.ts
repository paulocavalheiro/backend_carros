import { IsString, IsNotEmpty, IsInt, Min, Max } from 'class-validator'
import { Marca } from 'src/marca/entities/marca.entity'

export class CarroDTO {
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
    @IsString({ message: 'O campo nome deve ser string' })
    nome: string

    @IsNotEmpty({ message: 'O campo ano não pode ser vazio' })
    @IsInt({ message: 'O campo ano deve ser um número inteiro' })
    @Min(1910, { message: 'O campo ano deve ser maior ou igual a 1910' })
    @Max(new Date().getFullYear(), {
        message: 'O campo ano deve ser menor ou igual ao ano atual',
    })
    ano: number

    @IsNotEmpty({ message: 'O campo cor não pode ser vazio' })
    @IsString({ message: 'O campo cor deve ser string' })
    cor: string

    @IsNotEmpty({ message: 'O campo modelo não pode ser vazio' })
    @IsString({ message: 'O campo modelo deve ser string' })
    modelo: string

    @IsNotEmpty({ message: 'O campo tipo transmissao não pode ser vazio' })
    @IsString({ message: 'O campo tipo transmissao deve ser string' })
    tipo_transmissao: string

    marca: Marca
}
