import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';

@Component({
  selector: 'app-edit-producto-admin',
  templateUrl: './edit-producto-admin.component.html',
  styleUrls: ['./edit-producto-admin.component.css']
})
export class EditProductoAdminComponent {
  id_producto:any;
  producto:any;

  constructor(private route:ActivatedRoute, private router:Router, private productoService:ProductoService, private navbarVisibilityService:NavbarVisibilityServiceService){
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id_producto = Number (routeParams.get('id_producto'));
    console.log(this.id_producto);
    this.productoService.find(this.id_producto).subscribe((data:any)=>{
      this.producto=data;
      console.log(this.producto);
    })
  }


  update(idProducto:string, nombreProducto:string, descripcionProducto:string, precioProducto:string,categoriaProducto:string){
    this.productoService.update(this.id_producto,this.producto).subscribe((res)=>{
      this.router.navigateByUrl('/productos')
    })
  }
}
