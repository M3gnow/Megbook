import { Bairro } from './bairro-model';
import { tipoEndereco } from './tipoEndereco-model';
import { tipoLogradouro } from './tipoLogradouro-model';
import { tipoResidencia } from './tipoResidencia-model';

export interface Endereco {
    logradouro: String;
    numero: Number;
    CEP: String;
    observacoes: String;
    tipoResidencia: tipoResidencia;
    tipoLogradouro: tipoLogradouro;
    tipoEndereco: tipoEndereco;
    bairro: Bairro;
}