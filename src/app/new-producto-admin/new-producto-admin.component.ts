import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../services/categoria.service';


@Component({
  selector: 'app-new-producto-admin',
  templateUrl: './new-producto-admin.component.html',
  styleUrls: ['./new-producto-admin.component.css']
})
export class NewProductoAdminComponent {

  constructor(private fb:FormBuilder, private productoService:ProductoService, private router:Router, private navbarVisibilityService:NavbarVisibilityServiceService, private categoriaService: CategoriaService){
    
  }

  categorias: any;

  get id(){
    return this.formUser.get('id') as FormControl;
  }
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get descripcion(){
    return this.formUser.get('descripcion') as FormControl;
  }
  get precio(){
    return this.formUser.get('precio') as FormControl;
  }
  get categoria(){
    return this.formUser.get('categoria') as FormControl;
  }
  get link(){
    return this.formUser.get('link') as FormControl;
  }

  formUser =this.fb.group({
    'id':['', Validators.required],
    'nombre':['', Validators.required],
    'descripcion':['', Validators.required],
    'precio':['', Validators.required],
    'categoria':['', Validators.required],
    'link':['', Validators.required]
  });
 
  procesar(){
    console.log(this.formUser.value);
  }

  productos:any;
  


 
  ngOnInit():void{
    this.showCategorias();
  }

  showCategorias(){
    this.categorias = this.categoriaService.listCategorias().subscribe(categoria=>{
      this.categorias =categoria;
      console.log(this.categorias);
    })
  }


  add(idProducto:string,nombreProducto:string,descripcionProducto:string,precioProducto:string,categoriaProducto:string,linkProducto:string){
    this.productos={
      'id_producto': idProducto,
     'nombre_producto': nombreProducto,
     'descripcion_producto': descripcionProducto,
     'precio_producto': precioProducto,
     'categoria_id_categoria': categoriaProducto,
     'img_producto': linkProducto
    };
    this.productoService.addProducto(this.productos as any).subscribe(producto=>{
      this.productos=producto
    });

     
    console.log(this.productos);
    this.router.navigateByUrl('/productos')
  }




 
}
