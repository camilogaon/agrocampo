import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { ActivAdminService } from '../services/activ-admin.service';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';

import * as XLSX from 'xlsx';

interface Producto {
  id_producto: string;
  nombre_producto: string;
  descripcion_producto: string;
  precio_producto: string;
  
}

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',

  styleUrls: ['./producto-admin.component.css']
})
export class ProductoAdminComponent {
  constructor (private productoService: ProductoService, private router:Router, private categoriaService: CategoriaService, private Auth:AuthService, private tokenService:TokenService, private navbarVisibilityService:NavbarVisibilityServiceService){
    
  }

  productos: any;
  showAlert: boolean = false;

  users: any;
  ngOnInit():void{
    this.showProductos();
    const token = localStorage.getItem('token'); 
    console.log('Token JWT:', token);// Obtener el token del almacenamiento
    if (token) {
      this.users = this.Auth.decodeToken(token);
    }
  }

  showProductos(){
    this.productos=this.productoService.listProductos().subscribe(producto=>{
      this.productos=producto;
      console.log(this.productos);
    });
  }


  deleteProducto(id_producto: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar este producto?');
  
    if (confirmDelete) {
      this.productoService.deleteProducto(id_producto).subscribe(res => {
        this.productos = this.productos.filter((a: any) => a.id_producto !== id_producto);
      });
      this.router.navigateByUrl('/producto');
    }
  }
 
  exportToExcel(): void {
    this.productoService.listProductos().subscribe(productos => {
      console.log('Productos recibidos:', this.productos);
  
      const dataToExport = productos.map((producto: Producto) => {
        return {
          'id_producto': producto.id_producto,
          'nombre_producto': producto.nombre_producto,
          'descripcion_producto': producto.descripcion_producto,
          'precio_producto': producto.precio_producto
        };
      });
      console.log('Datos a exportar:', dataToExport);
  
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
      console.log('Hoja de trabajo creada:', worksheet);
  
      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Productos');
      console.log('Libro de trabajo creado:', workbook);
  
      XLSX.writeFile(workbook, 'productos.xlsx');
      console.log('Archivo Excel generado.');
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 2000);
    });
  }
  


}
