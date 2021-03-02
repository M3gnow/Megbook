import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from './client.model';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  MEGBOOK_API = "http://localhost:3001/clients";

  showOnConsole (mensagem: string, isError: boolean = false) : void {
    this.snackBar.open(mensagem, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['mat-toolbar', 'mat-primary'] : ['mat-toolbar', 'mat-accent']
    });
  }

  createClient (client: Client) : Observable <Client> {
    return this.httpClient.post<Client>(this.MEGBOOK_API, client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  read () : Observable <Client[]> {
    return this.httpClient.get<Client[]>(this.MEGBOOK_API).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  readById(id: Number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.MEGBOOK_API}/${id}`).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  update(client:  Client): Observable<Client> {
    return this.httpClient.put<Client>(`${this.MEGBOOK_API}/${client.id}`, client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  delete(id: Number): Observable<Client> {
    return this.httpClient.delete<Client>(`${this.MEGBOOK_API}/${id}`).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e) )
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showOnConsole('Ocorreu um erro!!', true);
    return EMPTY;
  }
}
