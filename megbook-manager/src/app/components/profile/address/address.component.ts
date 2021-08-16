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

    bairro: string;
    cidade: string;
    estado: string;
    pais: string;

    tipoLogradouro: string;
    tipoResidencia: string;
    activeAdd: boolean = false;
    idName: string;
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

    filterAddress(addressType: string) {
        if (addressType === 'residencial') {
            this.activeAdd = false;
        }

        if (addressType === 'cobranca') {
            this.activeAdd = false;
        }

        if (addressType === 'entrega') {
            this.activeAdd = true;
        }
    }
}
