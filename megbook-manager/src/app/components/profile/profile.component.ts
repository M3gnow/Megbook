import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'megbook-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    name: string;
    cpf: string;
    clientGenero: boolean;
    dateNasciment: any;
    optionGenero = Array<any>();
    selectView: string = 'registerView';

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.name = 'Thiago Henrique de Araujo';
        this.cpf = '622.522.422-18';
        this.dateNasciment = new Date(1998, 10 - 1, 10);
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

    changeGenero(value: any) {
        console.log(value.value);
    }

    updateClient(selectView: string): void {
        // this.clienteService.createClient(this.client).subscribe(()=> {
        //   this.router.navigate(['/client']);
        //   this.clienteService.showOnConsole("Cadastro realizado com sucesso!!");
        // });
    }

    cancel(): void {
        this.router.navigate(['/']);
    }

    filterProfile(view: string) {
        if (view === 'registerView') {
            this.selectView = 'registerView';
        }

        if (view === 'addressView') {
            this.selectView = 'addressView';
        }

        if (view === 'creditCardView') {
            this.selectView = 'creditCardView';
        }

        if (view === 'updatePasswordView') {
            this.selectView = 'updatePasswordView';
        }
    }
}
