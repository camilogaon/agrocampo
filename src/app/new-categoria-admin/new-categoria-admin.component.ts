import { Component } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Router } from '@angular/router';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';
import * as XLSX from 'xlsx';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Categoria {
  id_categoria: string;
  nombre_categoria: string;
  descripcion_categoria: string;
 
  
}
@Component({
  selector: 'app-new-categoria-admin',
  templateUrl: './new-categoria-admin.component.html',
  styleUrls: ['./new-categoria-admin.component.css']
})
export class NewCategoriaAdminComponent {

  constructor(private fb:FormBuilder, private categoriaService: CategoriaService, private router:Router, private navbarVisibilityService:NavbarVisibilityServiceService) {
    
  }
  get id(){
    return this.formUser.get('id') as FormControl;
  }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get descripcion(){
    return this.formUser.get('descripcion') as FormControl;
  }

  formUser =this.fb.group({
    'id':['', Validators.required],
    'nombre':['', Validators.required],
    'descripcion':['', Validators.required],
  });
 
  procesar(){
    console.log(this.formUser.value);
  }

  categorias: any;

  ngOnInit(): void {
  }

  add(idCategoria:string, nombreCategoria:string, descripcionCategoria:string){
    this.categorias={
      'id_categoria': idCategoria,
      'nombre_categoria': nombreCategoria,
      'descripcion_categoria': descripcionCategoria,
    };
    this.categoriaService.addCategoria(this.categorias as any).subscribe(categoria=>{
      this.categorias=categoria
    });
    
    console.log(this.categorias);
    this.router.navigateByUrl('/categorias');
  }

  
  
}
