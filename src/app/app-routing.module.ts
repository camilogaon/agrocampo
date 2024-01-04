import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { PageStartComponent } from './page-start/page-start.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AdminComponent } from './admin/admin.component';
import { NewCategoriaAdminComponent } from './new-categoria-admin/new-categoria-admin.component';
import { CategoriaAdminComponent } from './categoria-admin/categoria-admin.component';
import { EditCategoriaAdminComponent } from './edit-categoria-admin/edit-categoria-admin.component';
import { ProductoAdminComponent } from './producto-admin/producto-admin.component';
import { NewProductoAdminComponent } from './new-producto-admin/new-producto-admin.component';
import { EditProductoAdminComponent } from './edit-producto-admin/edit-producto-admin.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';
import { ActivAdminService } from './services/activ-admin.service';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  {
    path: '',pathMatch:'full', redirectTo:'inicio',
  },
  {
    path: 'inicio', component:PageStartComponent
  },
  {
    path: 'add' , component : NewArticleComponent
  },
  {
    path: 'edit/:articleId', component:EditArticleComponent
  },
  {
    path: 'registrar-user', component:RegistrarUserComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'productos-lista', component:ProductosListaComponent
  },
  {
    path: 'pagina-carrito', component:PaginaCarritoComponent
  },
  {
    path: 'login-user', component:LoginUserComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'dashboard', component:DashboardComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'admin-page', component:AdminComponent,
  },
  {
    path: 'add-categoria', component:NewCategoriaAdminComponent
  },
  {
    path: 'categorias', component:CategoriaAdminComponent
  },
  {
    path:'editcategoria/:id_categoria', component:EditCategoriaAdminComponent
  },
  {
    path:'productos', component:ProductoAdminComponent
  },
  {
    path:'add-producto', component:NewProductoAdminComponent
  },
  {
    path:'editproducto/:id_producto', component:EditProductoAdminComponent
  },
  {
    path:'subirimg', component:SubirImagenComponent
  },
  {
    path:'nosotros', component:NosotrosComponent
  },
  { 
    path: '**', component: ErrorpageComponent 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
