import { Marca } from 'src/marca/entities/marca.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    JoinTable,
} from 'typeorm'

@Entity()
export class Carro {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    ano: number

    @Column()
    cor: string

    @Column()
    modelo: string

    @Column()
    tipo_transmissao: string

    // relacao entre carro e marca (orm)
    @ManyToOne(() => Marca, (marca) => marca.carros)
    marca: Marca
}
