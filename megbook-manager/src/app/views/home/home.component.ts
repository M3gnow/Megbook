import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'megbook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgbCarouselConfig ]
})

export class HomeComponent implements OnInit {
  client: boolean =  true;
  admin: boolean =  true;
  preco: Number = 42.25;
  title: String =  'Amor Assasino';
  genero:  String = 'Romance';
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  livros = [];
  filterValue = []
  constructor(private headerService: HeaderService, config: NgbCarouselConfig) { 
    // Config carousel
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    
    headerService.HeaderData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    this.livros = [
      {
        title : 'O essencial da psicologia O essencial da psicologia O essencial da psicologia O essencial da psicologia' ,
        genero: 'Romance',
        preco: 48.69
      },
      {
        title : 'O Assasino' ,
        genero: 'Romance',
        preco: 48.69
      },
      {
        title : 'O Amor' ,
        genero: 'Romance',
        preco: 48.69
      },
      {
        title : 'O Mar e a Lua' ,
        genero: 'Romance',
        preco: 48.69
      },
      {
        title : 'A loucura' ,
        genero: 'Romance',
        preco: 48.69
      },
    ];

    this.filterValue = [
      { 
        type: 'pre',
        value : 20 
      },
      { 
        type: 'pre',
        value : 40 
      },
      { 
        type: 'pre',
        value : 50 
      },
      { 
        type: 'pos',
        value : 60 
      },
    ];
  }

}
