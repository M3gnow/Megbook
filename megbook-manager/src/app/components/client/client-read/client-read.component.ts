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
  displayedColumns = ['id', 'name', 'price', 'action', 'status'];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clients = [
      { 
        id: 1,
        name:'megnow', 
        price: 100.50,
        status: false
      },
      {
        id: 2,
        name:'big', 
        price: 50.50,
        status: true
      },
      {
        id: 3,
        name:'trollando', 
        price: 20.50,
        status: true
      },
      {
        id: 4,
        name:'trollando', 
        price: 20.50,
        status: true
      },
      
    ];
    // this.clientService.read().subscribe((resultClient)=> { 
    //   this.clients = resultClient;
    // });
  }

}
