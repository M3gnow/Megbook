import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { CuponsComponent } from './components/cupons/cupons.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { EnderecoComponent } from './components/endereco/endereco.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clients',
    component: ClientComponent
  },
  {
    path: 'client/create',
    component: ClientCreateComponent
  },
  {
    path: 'client/update/:id',
    component: ClientUpdateComponent
  },
  {
    path: 'client/delete/:id',
    component: ClientDeleteComponent
  },
  {
    path: 'endereco',
    component: EnderecoComponent
  },
  {
    path: 'cartoes',
    component: CartaoComponent
  },
  {
    path: 'cupons',
    component: CuponsComponent
  },
  {
    path: 'transacoes',
    component: TransacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
