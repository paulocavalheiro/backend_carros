import { MarcaService } from './marca.service';
import { Marca } from './entities/marca.entity';
import { MarcaDTO } from './dto/marca.dto';
export declare class MarcaController {
    private readonly marcaService;
    constructor(marcaService: MarcaService);
    getMarcas(): Promise<Marca[]>;
    getMarca(id: string): Promise<Marca>;
    createMarca(marcaDTO: MarcaDTO): Promise<Marca>;
    updateMarca(id: string, MarcaDTO: MarcaDTO): Promise<Marca>;
    removeMarca(id: string): Promise<{
        affected?: number;
    }>;
}
