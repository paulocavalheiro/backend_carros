import { IsString, IsNotEmpty } from 'class-validator'
import { Marca } from '../entities/marca.entity'

export class MarcaDTO {
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
    @IsString({ message: 'O campo nome deve ser string' })
    nome: string
}
