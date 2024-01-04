import { Component } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';

import * as XLSX from 'xlsx';

interface Categoria {
  id_categoria: string;
  nombre_categoria: string;
  descripcion_categoria: string;
 
  
}

@Component({
  selector: 'app-categoria-admin',
  templateUrl: './categoria-admin.component.html',
  styleUrls: ['./categoria-admin.component.css']
})
export class CategoriaAdminComponent {
  constructor(private categoriaService: CategoriaService, private router:Router, private navbarVisibilityService: NavbarVisibilityServiceService ) {
    
  }


  categorias: any;

  showAlert: boolean = false;

  ngOnInit():void{
    this.showCategorias();
  }

  showCategorias(){
    this.categorias = this.categoriaService.listCategorias().subscribe(categoria=>{
      this.categorias =categoria;
      console.log(this.categorias);
    })
  }


  deleteCategoria(id_categoria: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta categoría?');
  
    if (confirmDelete) {
      this.categoriaService.deleteCategoria(id_categoria).subscribe(res => {
        this.categorias = this.categorias.filter((a: any) => a.id_categoria != id_categoria);
      });
      this.router.navigateByUrl('/categorias');
    }
  }
  


  exportToExcel(): void {
    this.categoriaService.listCategorias().subscribe(categorias => {
      console.log('Productos recibidos:', this.categorias);
  
      const dataToExport = categorias.map((categoria: Categoria) => {
        return {
          'id_categoria': categoria.id_categoria,
          'nombre_categoria': categoria.nombre_categoria,
          'descripcion_categoria': categoria.descripcion_categoria,
        };
      });

      console.log('Datos a exportar:', dataToExport);
  
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
      console.log('Hoja de trabajo creada:', worksheet);
  
      const workbook: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Categoria');
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
