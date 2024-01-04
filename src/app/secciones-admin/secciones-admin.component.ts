import { Component } from '@angular/core';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-secciones-admin',
  templateUrl: './secciones-admin.component.html',
  styleUrls: ['./secciones-admin.component.css']
})
export class SeccionesAdminComponent {

    constructor (private productoService: ProductoService, private router:Router, private categoriaService: CategoriaService, private Auth:AuthService, private tokenService:TokenService, private navbarVisibilityService:NavbarVisibilityServiceService){
     
    }
}
