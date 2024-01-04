import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { LoginUserComponent } from '../login-user/login-user.component';
import { ListaproductoService } from '../services/listaproducto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  public loggedIn: boolean;
  public currentUserEmail: string;
  listaproductos: any;


  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private listaproductoService:ListaproductoService
  ) {
    this.loggedIn = false;
    this.currentUserEmail = '';
  }

 


  ngOnInit(){
    this.Auth.authStatus.subscribe(value=>this.loggedIn=value);
    console.log('Valor de loggedIn:', this.loggedIn);
    if (this.loggedIn && (this.currentUserEmail === 'admin1@gmail.com' || this.currentUserEmail === 'admin2@gmail.com')) {
      this.currentUserEmail = this.Auth.getCurrentUserEmail();
    }
  }

  isProductTabDisabled(): boolean {
    return this.loggedIn && this.currentUserEmail === 'admin1@gmail.com';
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login-user');
    this.deleteTabla();
  }


  

  deleteTabla() {
    this.listaproductoService.deleteProductoTabla().subscribe(
      () => {
        this.listaproductos = []; // Elimina todos los elementos de la lista
        console.log('Todos los registros eliminados con éxito.');
      },
      error => {
        console.error('Error al eliminar los registros:', error);
      }
    );
  }
}
