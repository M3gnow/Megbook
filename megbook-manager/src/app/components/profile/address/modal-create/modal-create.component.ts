import { MatDialog } from '@angular/material/dialog';
import { Pais } from './../../../../models/pais-model';
import { Estado } from './../../../../models/estado-model';
import { Cidade } from './../../../../models/cidade-model';
import { Bairro } from './../../../../models/bairro-model';
import { tipoResidencia } from './../../../../models/tipoResidencia-model';
import { tipoLogradouro } from './../../../../models/tipoLogradouro-model';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/components/client/client.model';

@Component({
    selector: 'megbook-modal-create',
    templateUrl: './modal-create.component.html',
    styleUrls: ['./modal-create.component.css'],
})
export class ModalCreateComponent implements OnInit {
    tipoLogradouros: tipoLogradouro[];
    tipoResidencias: tipoResidencia[];
    bairros: Bairro[];
    cidades: Cidade[];
    estados: Estado[];
    paises: Pais[];

    bairro: string;
    cidade: string;
    estado: string;
    pais: string;

    tipoLogradouro: string;
    tipoResidencia: string;

    client: Client = {
        name: null,
        price: null,
    };

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
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
    }

    createAddress() {
        this.dialog.closeAll();
    }

    cancel() {
        this.dialog.closeAll();
    }
}
