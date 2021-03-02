import { Client } from './../client.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from './../client.service';

@Component({
  selector: 'megbook-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client: Client;
  //Number.parseInt or simbolo '+' : Ambos convertem para numerico
  id = Number.parseInt(this.route.snapshot.paramMap.get('id'));

  constructor(private clientSerivce: ClientService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    // this.clientSerivce.readById(this.id).subscribe((client)=> {
    //   this.client = client
    // });
    this.client = { 
      id: this.id,
      name:'megnow', 
      price: 100.50
    }
  }

  deleteClient(): void {
    // this.clientSerivce.delete(this.client.id);
    this.clientSerivce.showOnConsole(`Cliente ${this.id} - excluído com sucesso!!`);
    this.router.navigate(['/clients']);
  }

  cancel(): void {
    this.clientSerivce.showOnConsole('Ação excluir cancelada!');
    this.router.navigate(['/clients']);
  }
}
