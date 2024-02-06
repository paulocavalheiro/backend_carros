import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Marca {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   nome: string
}
