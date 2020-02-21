import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HOST } from "../constants/api.constants";
import { Token } from "../models/token.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  token: string;
  constructor(private http: HttpClient) {}

  // Creamos un método a la dirección de la API con el user y el password
  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(HOST + "login", { username, password });
  }
}
