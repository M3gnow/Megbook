import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'megbook-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: null,
    price: null
  };

  constructor(private clienteService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  createClient () : void {
    this.clienteService.createClient(this.client).subscribe(()=> {
      this.router.navigate(['/client']);
      this.clienteService.showOnConsole("Cadastro realizado com sucesso!!");
    });
  }

  cancel () : void{
    this.router.navigate(['/client']);
  }

}
