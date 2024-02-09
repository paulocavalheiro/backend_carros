import { Repository } from 'typeorm';
import { Marca } from './entities/marca.entity';
import { MarcaDTO } from './dto/marca.dto';
export declare class MarcaService {
    private readonly marcaRepository;
    constructor(marcaRepository: Repository<Marca>);
    findAll(): Promise<Marca[]>;
    findOne(id: number): Promise<Marca>;
    create(marcaDTO: MarcaDTO): Promise<Marca>;
    update(id: number, marcaDTO: MarcaDTO): Promise<Marca>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
}
