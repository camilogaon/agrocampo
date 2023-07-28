import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { PageStartComponent } from './page-start/page-start.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';


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
    path: 'registrar-user', component:RegistrarUserComponent
  },
  {
    path: 'productos-lista', component:ProductosListaComponent
  },
  {
    path: 'pagina-carrito', component:PaginaCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
