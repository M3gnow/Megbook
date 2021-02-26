import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './client.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  MEGBOOK_API = "http://localhost:3001/clients";

  showOnConsole (mensagem: string) : void {
    this.snackBar.open(mensagem, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  createClient (client: Client) : Observable <Client> {
    return this.httpClient.post<Client>(this.MEGBOOK_API, client);
  }

  readClient () : Observable <Client[]> {
    return this.httpClient.get<Client[]>(this.MEGBOOK_API);
  }
}
