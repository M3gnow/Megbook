import { Observable } from 'rxjs';
import { Client } from './../client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'megbook-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client;

  constructor(private clientService: ClientService, private router:  Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.client = { 
      id: id,
      name:'megnow', 
      price: 100.50
    }
    // this.clientService.readById(id).subscribe( client => {
    //   // this.client = client 
    // });
  } 

  updateClient() : void {
    this.clientService.showOnConsole('Produto Atualizado com sucesso');
    // this.clientService.update(this.client).subscribe(() => {
    //   this.clientService.showOnConsole('Produto Atualizado com sucesso');
    // });
    this.router.navigate(['/clients']);
  }

  cancel () : void {
    this.clientService.showOnConsole('Ação editar cancelada!');
    this.router.navigate(['/clients']);
  }
}
