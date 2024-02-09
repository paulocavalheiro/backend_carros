import { Carro } from 'src/carro/entities/carro.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    OneToMany,
} from 'typeorm'

@Entity()
export class Marca {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @OneToMany(() => Carro, (carro) => carro.marca)
    carros: Carro[]
}
