import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'megbook-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor (private router: Router, private headerService: HeaderService) {
    headerService.HeaderData = {
      title: 'Cadastro de Clientes',
      icon: 'people_alt',
      routeUrl: '/clients'
    }
   }

  ngOnInit (): void {
  }

  navigateToClientCreate () : void {
    this.router.navigate(['/client/create']);
  }
}
