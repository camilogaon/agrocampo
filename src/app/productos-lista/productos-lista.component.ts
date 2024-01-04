import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ListaproductoService } from '../services/listaproducto.service';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { JarwisService } from '../services/jarwis.service';


@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: any;

  listaproductos: any;

  terminoBusqueda: string = '';

  showAlert: boolean = false;

  constructor(private Jarwis:JarwisService, private listaproductoService: ListaproductoService, private router:Router, private productoService:ProductoService, private tokenService:TokenService, private authService:AuthService) {}



  public form ={
    email: null,
    password:null
  };

  public error = null;

  ngOnInit():void{
    this.showProductos();

   }
    
   pressbutton(id_producto:string,nombre_producto:string,descripcion_producto:string,precio_producto:string): void {
    if (this.tokenService.loggedIn()) {
      // El usuario ha iniciado sesión, redirigir a la ruta deseada
      // this.router.navigate(['/ruta-especifica']);
      this.add(id_producto,nombre_producto,descripcion_producto,precio_producto);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 1000);
    } else {
      // El usuario no ha iniciado sesión, redirigir a iniciar sesión después de 10 minutos
        this.router.navigate(['/login-user']);
 
    }
  }
  
    showProductos(){
      this.productos=this.productoService.listProductos().subscribe(producto=>{
        this.productos=producto;
        console.log(this.productos);
        
      });
    }

    agregarAlCarrito(producto:any): void {
      this.listaproductos.push(producto);
 
    }
    

    add(nombre_producto:string,descripcion_producto:string,precio_producto:string,id_producto:string){
      this.productos={

       'nombre_producto': nombre_producto,
       'descripcion_producto': descripcion_producto,
       'precio_producto': precio_producto,
       'id_producto': id_producto,

      };
      this.listaproductoService.addProducto(this.productos as any).subscribe(producto=>{
        this.productos=producto
      });
    
    }


    buscarProducto() {
      if (this.terminoBusqueda.trim() !== '') {
        // Verifica que el término de búsqueda no esté vacío
  
        // Llama al servicio para buscar productos
        this.listaproductoService.buscarProductos(this.terminoBusqueda)
          .subscribe((resultados: any) => {
            // Asigna los resultados de la búsqueda al arreglo de productos
            this.productos = resultados;
            console.log('Resultados de la búsqueda:', this.productos);
          }, error => {
            console.error('Error al buscar productos:', error);
          });
      } else {
        // Manejar el caso en que el término de búsqueda esté vacío
        console.log('El término de búsqueda está vacío.');
      }
    }

  
  }
