import { Component, OnInit } from '@angular/core';
import { ListaproductoService } from '../services/listaproducto.service';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { AuthService } from '../services/auth.service';
import { VentasService } from '../services/ventas.service';
import * as XLSX from 'xlsx';

interface Venta {
  id_cliente: string;
  id_producto: string;
  // ... otras propiedades de venta ...
}
@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent {

  constructor(private listaproductoService: ListaproductoService, private router:Router, private productoService:ProductoService, private Auth:AuthService, private ventasService:VentasService) {}

  listaproductos: any;
  carrito: any[] = [];
  productos:any;
  users: any;
  ventas:any;

  showAlert: boolean = false;

  ngOnInit():void{
    this.showArticles();
    const token = localStorage.getItem('token'); 
    console.log('Token JWT:', token);// Obtener el token del almacenamiento
    if (token) {
      this.users = this.Auth.decodeToken(token);
    }
    }

  showArticles(){
    this.listaproductos =this.listaproductoService.listListaproductos().subscribe(listaproducto=>{
      this.listaproductos = listaproducto;
      console.log(this.listaproductos);
    });
    this.productos=this.productoService.listProductos().subscribe(producto=>{
      this.productos=producto;
      console.log(this.productos);
      
    });
  }

  deleteArticle(id_carrito: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar este producto?');
  
    if (confirmDelete) {
      this.listaproductoService.deleteProducto(id_carrito).subscribe(res => {
        this.listaproductos = this.listaproductos.filter((a: any) => a.id_carrito !== id_carrito);
      });
      this.router.navigateByUrl('/producto');
    }
  }

  deleteArticlecomprar(id_carrito: any) {

      this.listaproductoService.deleteProducto(id_carrito).subscribe(res => {
        this.listaproductos = this.listaproductos.filter((a: any) => a.id_carrito !== id_carrito)
      }
      )
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


    

    add(sub:string,id_producto:string,id_carrito:string){
      this.ventas={

       'id_cliente': sub,
       'id_producto': id_producto,
       
      };
      this.ventasService.addVenta(this.ventas as any).subscribe(venta=>{
        this.ventas=venta
        
      });
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false; // Ocultar la alerta después de 2 segundos
      }, 2000);
      this.deleteArticlecomprar(id_carrito);
    }

    exportToExcel(): void {
      this.ventasService.listVentas().subscribe(ventas => {
        const dataToExport = ventas.map((venta: Venta) => {
          return {
            'id_cliente': venta.id_cliente,
            'id_producto': venta.id_producto
          };
        });
  
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Ventas');
  
        XLSX.writeFile(workbook, 'ventas.xlsx');
      });
    }
  
  
}
