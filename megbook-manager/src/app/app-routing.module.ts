import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
