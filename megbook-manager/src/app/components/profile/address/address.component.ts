import { ModalCreateComponent } from './modal-create/modal-create.component';
import { Pais } from './../../../models/pais-model';
import { Estado } from './../../../models/estado-model';
import { Cidade } from './../../../models/cidade-model';
import { Bairro } from './../../../models/bairro-model';
import { tipoResidencia } from './../../../models/tipoResidencia-model';
import { tipoLogradouro } from './../../../models/tipoLogradouro-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'megbook-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
    tipoLogradouros: tipoLogradouro[];
    tipoResidencias: tipoResidencia[];
    bairros: Bairro[];
    cidades: Cidade[];
    estados: Estado[];
    paises: Pais[];
    activeAdd: boolean = false;
    idName: string;

    //residencia
    tipoLogradouro: string;
    tipoResidencia: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    cep: string;
    logradouro: string;
    number: number;
    observacao: string;
    nameAddressEntrega: string;

    constructor(public dialog: MatDialog) {}

    openDialog() {
        const dialogRef = this.dialog.open(ModalCreateComponent, {
            height: '450px',
            width: '850px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    ngOnInit(): void {
        this.populateAddress('residencial');
        this.tipoLogradouros = tipoLogradourosMock;
        this.tipoResidencias = tipoResidenciaMock;
        this.paises = [
            { nome: 'Brasil', sigla: 'BR' },
            { nome: 'China', sigla: 'CN' },
            { nome: 'Alemanha', sigla: 'DE' },
        ];
        this.estados = estadosMock;
        this.cidades = [
            {
                nome: 'Itaquaquecetuba',
                estado: {
                    nome: 'São Paulo',
                    uf: 'SP',
                    pais: { nome: 'Brasil', sigla: 'BR' },
                },
            },
            {
                nome: 'Brás',
                estado: {
                    nome: 'São Paulo',
                    uf: 'SP',
                    pais: { nome: 'Brasil', sigla: 'BR' },
                },
            },
        ];
        this.bairros = [
            {
                nome: 'Jardim Tropical',
                cidade: {
                    nome: 'Itaquaquecetuba',
                    estado: {
                        nome: 'São Paulo',
                        uf: 'SP',
                        pais: { nome: 'Brasil', sigla: 'BR' },
                    },
                },
            },
            {
                nome: 'Jardim Paineira',
                cidade: {
                    nome: 'Itaquaquecetuba',
                    estado: {
                        nome: 'São Paulo',
                        uf: 'SP',
                        pais: { nome: 'Brasil', sigla: 'BR' },
                    },
                },
            },
        ];
        this.populateAddress('residencial');
        this.nameAddressEntrega = 'Casa da patroa'

    }

    filterAddress(addressType: string) {
        if (addressType === 'residencial') {
            this.activeAdd = false;
            this.populateAddress(addressType);
        }

        if (addressType === 'cobranca') {
            this.activeAdd = false;
            this.populateAddress(addressType);
        }

        if (addressType === 'entrega') {
            this.activeAdd = true;
            this.populateAddress(addressType);
        }
    }

    populateAddress(addressType: string) {
        if (addressType === 'residencial') {
            this.cep = '08582640'
            this.logradouro = 'Rua Quitandinha';
            this.number = 84;
            this.observacao = 'Proximo a avenida registro'
            
            this.tipoLogradouro = 'Rua';
            this.tipoResidencia = 'Casa';
            this.bairro = 'Jardim Tropical';
            this.cidade = 'Itaquaquecetuba';
            this.estado = 'São Paulo';
            this.pais = 'Brasil';
        }

        if (addressType === 'cobranca') {
            this.cep = '08582640'
            this.logradouro = 'Agua chata';
            this.number = 84;
            this.tipoLogradouro = 'Rua';
            this.tipoResidencia = 'Casa';
            this.bairro = 'Jardim Tropical';
            this.cidade = 'Itaquaquecetuba';
            this.estado = 'São Paulo';
            this.pais = 'Brasil';
            this.observacao = 'Proximo a avenida registro'
        }

        if (addressType === 'entrega') {
            this.cep = '08582640'
            this.logradouro = 'Ibitiara';
            this.number = 84;
            this.tipoLogradouro = 'Rua';
            this.tipoResidencia = 'Casa';
            this.bairro = 'Jardim Tropical';
            this.cidade = 'Itaquaquecetuba';
            this.estado = 'São Paulo';
            this.pais = 'Brasil';
            this.observacao = 'Proximo a avenida registro'
        }
    }
}

const tipoLogradourosMock = [   
    {
        tipo: 'Aeroporto',
    },
    {
        tipo: 'Alameda',
    },
    {
        tipo: 'Área',
    },
    {
        tipo: 'Avenida',
    },
    {
        tipo: 'Campo',
    },
    {
        tipo: 'Chácara',
    },
    {
        tipo: 'Colônia',
    },
    {
        tipo: 'Condomínio',
    },
    {
        tipo: 'Conjunto',
    },
    {
        tipo: 'Distrito',
    },
    {
        tipo: 'Esplanada',
    },
    {
        tipo: 'Estação',
    },
    {
        tipo: 'Estrada',
    },
    {
        tipo: 'Favela',
    },
    {
        tipo: 'Fazenda',
    },
    {
        tipo: 'Feira',
    },
    {
        tipo: 'Jardim',
    },
    {
        tipo: 'Ladeira',
    },
    {
        tipo: 'Lago',
    },
    {
        tipo: 'Lagoa',
    },
    {
        tipo: 'Largo',
    },
    {
        tipo: 'Loteamento',
    },
    {
        tipo: 'Morro',
    },
    {
        tipo: 'Núcleo',
    },
    {
        tipo: 'Parque',
    },
    {
        tipo: 'Passarela',
    },
    {
        tipo: 'Pátio',
    },
    {
        tipo: 'Praça',
    },
    {
        tipo: 'Quadra',
    },
    {
        tipo: 'Recanto',
    },
    {
        tipo: 'Residencial',
    },
    {
        tipo: 'Rodovia',
    },
    {
        tipo: 'Rua',
    },
    {
        tipo: 'Setor',
    },
    {
        tipo: 'Sítio',
    },
    {
        tipo: 'Travessa',
    },
    {
        tipo: 'Trecho',
    },
    {
        tipo: 'Trevo',
    },
    {
        tipo: 'Vale',
    },
    {
        tipo: 'Vereda',
    },
    {
        tipo: 'Via',
    },
    {
        tipo: 'Viaduto',
    },
    {
        tipo: 'Viela',
    },
    {
        tipo: 'Vila',
    }
];

const tipoResidenciaMock = [
    { nome: 'Casa' },
    { nome: 'Apartamento padrão' },
    { nome: 'Apartamento duplex' },
    { nome: 'Apartamento garden' },
    { nome: 'Apartamento de cobertura' },
    { nome: 'Sobrado' },
    { nome: 'Bangalô' },
    { nome: 'Loft' },
    { nome: 'Quitinete' },
    { nome: 'Flat' },
    { nome: 'Studio' },
];

const estadosMock = [
    {
        nome: 'Acre',
        uf: 'AC',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Alagoas',
        uf: 'AL',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Amapá',
        uf: 'AP',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Amazonas',
        uf: 'AM',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Bahia',
        uf: 'BH',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Ceará',
        uf: 'CE',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Espírito Santo',
        uf: 'ES',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Goiás',
        uf: 'GO',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Maranhão',
        uf: 'MA',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Mato Grosso',
        uf: 'MT',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Mato Grosso do Sul',
        uf: 'MS',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Minas Gerais',
        uf: 'MG',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Pará',
        uf: 'PA',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Paraíba',
        uf: 'PB',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Paraná',
        uf: 'PR',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Pernambuco',
        uf: 'PE',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Piauí',
        uf: 'PI',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Rio de Janeiro',
        uf: 'RJ',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Rio Grande do Norte',
        uf: 'RN',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Rio Grande do Sul',
        uf: 'RS',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Rondônia',
        uf: 'RO',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Roraima',
        uf: 'RR',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Santa Catarina',
        uf: 'SC',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'São Paulo',
        uf: 'SP',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Sergipe',
        uf: 'SE',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Tocantins',
        uf: 'TO',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
    {
        nome: 'Distrito Federal',
        uf: 'DF',
        pais: { nome: 'Brasil', sigla: 'BR' },
    },
];