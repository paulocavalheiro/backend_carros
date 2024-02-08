import { Marca } from 'src/marca/entities/marca.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
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

    @ManyToOne(() => Marca, (marca) => marca.id)
    marca: Marca
}
