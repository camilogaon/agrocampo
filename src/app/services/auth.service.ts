import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import  jwt_decode  from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = new BehaviorSubject <boolean> (this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

changeAuthStatus(value: boolean){
  this.loggedIn.next(value)
}

  constructor(private Token: TokenService) { }

  getCurrentUserEmail(): string {
    const token = this.Token.get(); // Obtener el token almacenado
    const payload = this.Token.payload(token); // Obtener los datos del token
    return payload ? payload.email : '';
  }



  decodeToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
}
