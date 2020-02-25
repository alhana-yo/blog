import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HOST } from '../constants/api.constants';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;
  constructor(private http: HttpClient) { }

  // Creamos un método a la dirección de la API e indicamos en l acabecera el
  // el user y el password transformados a base64

  // login(username: string, password: string): Observable<Token> {
  //   return this.http.post<Token>(HOST + "login", { username, password });
  // }

  login(auth: string): Observable<Token> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + auth
      })
    };
    console.log('headers', options);
    return this.http.post<Token>(HOST + 'login', '', options);
  }
}
