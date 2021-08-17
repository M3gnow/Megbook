import { Estado } from './../../../models/estado-model';
import { tipoResidencia } from './../../../models/tipoResidencia-model';
import { tipoLogradouro } from './../../../models/tipoLogradouro-model';
import { Cidade } from './../../../models/cidade-model';
import { Pais } from './../../../models/pais-model';
import { Bairro } from './../../../models/bairro-model';
import { tipoTelefone } from './../../../models/tipoTelefone';
import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Bandeira } from 'src/app/models/bandeira-model';

@Component({
    selector: 'megbook-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css'],
})
export class ClientCreateComponent implements OnInit {
    tipoTelefones: tipoTelefone[];
    tipoLogradouros: tipoLogradouro[];
    tipoResidencias: tipoResidencia[];
    bairros: Bairro[];
    cidades: Cidade[];
    estados: Estado[];
    paises: Pais[];
    tipoTelefone: string;

    // residencial
    tipoLogradouro: string;
    tipoResidencia: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;

    //entrega
    tipoLogradouroEntrega: string;
    tipoResidenciaEntrega: string;
    bairroEntrega: string;
    cidadeEntrega: string;
    estadoEntrega: string;
    paisEntrega: string;

    //cobranca
    tipoLogradouroCobranca: string;
    tipoResidenciaCobranca: string;
    bairroCobranca: string;
    cidadeCobranca: string;
    estadoCobranca: string;
    paisCobranca: string;

    checked: boolean = false;
    disabled: boolean = false;

    client: Client = {
        name: null,
        price: null,
    };

    hide = true;

    clientGenero: boolean;
    optionGenero = Array<any>();
    bandeiras: Bandeira[];
    bandeira: string;

    constructor(
        private clienteService: ClientService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.disabled = false;
        this.tipoTelefones = [
            { nome: 'Telefone Fixo' },
            { nome: 'Telefone Celular' },
            { nome: 'Telefone Comercial' },
        ];

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

        this.optionGenero = [
            {
                name: 'Masculino',
                value: true,
            },
            {
                name: 'Feminino',
                value: false,
            },
        ];

        this.bandeiras = [
            {
                nome: 'Visa',
            },
            {
                nome: 'Mastercard',
            },
        ];
    }

    createClient(): void {
        this.router.navigate(['/']);
        // this.clienteService.createClient(this.client).subscribe(()=> {
        //   this.router.navigate(['/client']);
        //   this.clienteService.showOnConsole("Cadastro realizado com sucesso!!");
        // });
    }

    cancel(): void {
        this.router.navigate(['/client']);
    }

    changeCheckbox(): void {
        this.checked = !this.checked;
        console.log(this.checked);
    }

    changeGenero(value: any) {
        console.log(value.value);
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
    },
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
