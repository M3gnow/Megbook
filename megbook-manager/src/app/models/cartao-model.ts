import { Bandeira } from './bandeira-model';
import { tipoCartao } from './tipoCartao-model';

export interface Cartao {
    numero: String
    nomeImpresso: String;
    codigoSeguranca: Number;
    tipoCartao: tipoCartao;
    bandeira: Bandeira;
}