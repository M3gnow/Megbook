import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { CuponsComponent } from './components/cupons/cupons.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';

import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';

import { SideNavComponent } from './components/template/header/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './components/template/header/toolbar/toolbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/profile/address/address.component';
import { ModalCreateComponent } from './components/profile/address/modal-create/modal-create.component';
import { CardComponent } from './components/profile/card/card.component';
import { CreateComponent } from './components/profile/card/create/create.component';
import { UpdatePasswordComponent } from './components/profile/update-password/update-password.component';
import { OrderComponent } from './components/order/order.component';

registerLocaleData(localePt);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ClientComponent,
        ClientCreateComponent,
        ClientReadComponent,
        ClientUpdateComponent,
        ClientDeleteComponent,
        EnderecoComponent,
        CartaoComponent,
        CuponsComponent,
        TransacoesComponent,
        LoginComponent,
        SideNavComponent,
        ToolbarComponent,
        ProfileComponent,
        AddressComponent,
        ModalCreateComponent,
        CardComponent,
        CreateComponent,
        UpdatePasswordComponent,
        OrderComponent,
    ],
    imports: [
        MatCheckboxModule,
        MatListModule,
        MatCardModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatMenuModule,
        MatSelectModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgbModule,
        MatIconModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR',
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent],
})
export class AppModule {}
