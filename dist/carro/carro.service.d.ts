import { Carro } from './entities/carro.entity';
import { Repository } from 'typeorm';
import { CarroDTO } from './dto/carro.dto';
import { Marca } from 'src/marca/entities/marca.entity';
export declare class CarroService {
    private readonly carroRepository;
    private readonly marcaRepository;
    constructor(carroRepository: Repository<Carro>, marcaRepository: Repository<Marca>);
    findAll(): Promise<Carro[]>;
    findOne(nome: string): Promise<Carro[]>;
    create(carroDTO: CarroDTO): Promise<Carro>;
    update(id: number, carroDTO: CarroDTO): Promise<Carro>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
    getMarca(carroDTO: CarroDTO): Promise<Marca>;
}
