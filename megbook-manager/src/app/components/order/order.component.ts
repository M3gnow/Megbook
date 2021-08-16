import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from './order';

@Component({
    selector: 'megbook-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
    dataSource: MatTableDataSource<Order>;
    foods = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ];

    orders: Order[];

    columnsToDisplay: string[] = [
        'NÚMERO DO PEDIDO',
        'STATUS',
        'DATA',
        'PAGAMENTO',
    ];

    constructor() {}

    ngOnInit(): void {
        this.orders = [
            {
                id: 100771,
                status: 'entregue',
                dateOrder: '26/05/2021',
                payment: 'CARTÃO CREDITO',
                details:
                    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard',
            },
            {
                id: 100772,
                status: 'entregue',
                dateOrder: '26/05/2021',
                payment: 'CARTÃO CREDITO',
                details:
                    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard',
            },
            {
                id: 100773,
                status: 'entregue',
                dateOrder: '26/05/2021',
                payment: 'CARTÃO CREDITO',
                details:
                    'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard',
            },
        ];
        this.dataSource = new MatTableDataSource<Order>(this.orders);
    }
}
