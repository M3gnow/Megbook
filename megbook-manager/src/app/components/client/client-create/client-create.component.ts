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
    tipoLogradouro: string;
    tipoResidencia: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    checked: boolean = false;
    disabled: boolean = false;

    client: Client = {
        name: null,
        price: null,
    };

    hide = true;

    clientGenero: boolean;
    optionGenero = Array<any>();
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

        this.tipoLogradouros = [
            { tipo: 'Rua' },
            { tipo: 'Avenida' },
            { tipo: 'Estrada' },
        ];

        this.tipoResidencias = [
            { nome: 'Casa' },
            { nome: 'Apartamento' },
            { nome: 'Sobrado' },
        ];

        this.paises = [
            { nome: 'Brasil', sigla: 'BR' },
            { nome: 'China', sigla: 'CN' },
            { nome: 'Alemanha', sigla: 'DE' },
        ];

        this.estados = [
            {
                nome: 'São Paulo',
                uf: 'SP',
                pais: { nome: 'Brasil', sigla: 'BR' },
            },
            {
                nome: 'Rio de Janeiro',
                uf: 'SP',
                pais: { nome: 'Brasil', sigla: 'BR' },
            },
        ];

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
    }

    createClient(): void {
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
