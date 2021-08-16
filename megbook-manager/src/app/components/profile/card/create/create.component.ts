import { MatDialog } from '@angular/material/dialog';
import { tipoTelefone } from './../../../../models/tipoTelefone';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'megbook-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
    tipoTelefones: tipoTelefone[];
    tipoTelefone: string;
    checked: boolean = false;
    disabled: boolean = false;
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {}
    createCard() {
        this.dialog.closeAll();
    }

    cancel() {
        this.dialog.closeAll();
    }
    changeCheckbox(): void {
        console.log(this.checked);
        this.checked = !this.checked;
        console.log(this.checked);
    }
}
