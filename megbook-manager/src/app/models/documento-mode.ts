import { tipoDocumento } from './tipoDocumento-model';
export interface Documento {
    codigo: String;
    validade: Date;
    tipoDocumento: tipoDocumento;
}