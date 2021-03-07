export interface Client {
    id?: Number;
    name: string;
    genero: String;
    dataNascimento: Date;
    pessoa: [
        {
            codigo: String,
            validade: Date
        }
    ]
}