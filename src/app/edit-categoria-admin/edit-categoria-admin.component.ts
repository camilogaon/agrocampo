import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { NavbarVisibilityServiceService } from '../services/navbar-visibility-service.service';

@Component({
  selector: 'app-edit-categoria-admin',
  templateUrl: './edit-categoria-admin.component.html',
  styleUrls: ['./edit-categoria-admin.component.css']
})
export class EditCategoriaAdminComponent {

  
  id_categoria:any;
  categoria:any ={};

  constructor(private route: ActivatedRoute, private router: Router, private categoriaService:CategoriaService, private navbarVisibilityService:NavbarVisibilityServiceService ){
   

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id_categoria = Number (routeParams.get('id_categoria'));
    console.log(this.id_categoria);
    this.categoriaService.find(this.id_categoria).subscribe((data:any)=>{
      this.categoria =data;
      console.log(this.categoria);
    })
  }

  update(idCategoria:string, nombreCategoria:string, descripcionCategoria:string){
    this.categoriaService.update(this.id_categoria, this.categoria).subscribe((res)=>{
      this.router.navigateByUrl('/categorias');
    })
  }
}
