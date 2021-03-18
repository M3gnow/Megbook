import { Cartao } from './cartao-model';
import { Endereco } from './endereco-model';
import { Ranking } from './ranking-model';
import { Pessoa } from './pessoa-model';
import { Telefone } from './telefone-model';

export interface Client {
    nome: String;
    genero: String;
    dataNascimento: Date;
    cartao: Cartao[];
    telefone: Telefone;
    pessoa: Pessoa;
    ranking: Ranking;
    endereco: Endereco[];
}
