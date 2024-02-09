import { Marca } from 'src/marca/entities/marca.entity';
export declare class Carro {
    id: number;
    nome: string;
    ano: number;
    cor: string;
    modelo: string;
    tipo_transmissao: string;
    marca: Marca;
}
