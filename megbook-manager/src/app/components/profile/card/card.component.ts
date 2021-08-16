import { CreateComponent } from './create/create.component';
import { tipoTelefone } from './../../../models/tipoTelefone';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'megbook-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    tipoTelefones: tipoTelefone[];
    tipoTelefone: string;
    checked: boolean = false;
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.tipoTelefones = [
            { nome: 'Telefone Fixo' },
            { nome: 'Telefone Celular' },
            { nome: 'Telefone Comercial' },
        ];
    }

    openDialog() {
        const dialogRef = this.dialog.open(CreateComponent, {
            height: '250px',
            width: '850px',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    changeCheckbox(): void {
        console.log(this.checked);
        this.checked = !this.checked;
        console.log(this.checked);
    }
}
