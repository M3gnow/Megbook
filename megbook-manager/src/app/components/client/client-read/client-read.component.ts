import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'megbook-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = [
      { 
        id: 1,
        name:'megnow', 
        price: 100.50
      },
      {
        id: 2,
        name:'big', 
        price: 50.50
      },
      {
        id: 3,
        name:'trollando', 
        price: 20.50
      },
    ];
    // this.clientService.readClient().subscribe((resultClient)=> { 
    //   this.clients = resultClient;
    // });
  }

}
