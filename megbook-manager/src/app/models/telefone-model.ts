import { tipoTelefone } from './tipoTelefone';

export interface Telefone {
    ddd: Number;
    numero: String;
    tipoTelefone: tipoTelefone;
}