import { CarroService } from './carro.service';
import { Carro } from './entities/carro.entity';
import { CarroDTO } from './dto/carro.dto';
export declare class CarroController {
    private readonly carroService;
    constructor(carroService: CarroService);
    getCarros(): Promise<Carro[]>;
    getcarro(nome: string): Promise<Carro[]>;
    createCarro(carroDTO: CarroDTO): Promise<Carro>;
    updateCarro(id: string, carroDto: CarroDTO): Promise<Carro>;
    removeCarro(id: string): Promise<{
        affected?: number;
    }>;
}
