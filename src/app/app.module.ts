import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PageStartComponent } from './page-start/page-start.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { PaginaCarritoComponent } from './pagina-carrito/pagina-carrito.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { AdminComponent } from './admin/admin.component';
import { NewProductoAdminComponent } from './new-producto-admin/new-producto-admin.component';
import { NewCategoriaAdminComponent } from './new-categoria-admin/new-categoria-admin.component';
import { CategoriaAdminComponent } from './categoria-admin/categoria-admin.component';
import { EditCategoriaAdminComponent } from './edit-categoria-admin/edit-categoria-admin.component';
import { ProductoAdminComponent } from './producto-admin/producto-admin.component';
import { EditProductoAdminComponent } from './edit-producto-admin/edit-producto-admin.component';
import { SeccionesAdminComponent } from './secciones-admin/secciones-admin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';
import { ActivAdminService } from './services/activ-admin.service';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    NewArticleComponent,
    EditArticleComponent,
    NavbarComponent,
    PageStartComponent,
    FooterComponent,
    RegistrarUserComponent,
    ProductosListaComponent,
    PaginaCarritoComponent,
    LoginUserComponent,
    DashboardComponent,
    AdminComponent,
    NewProductoAdminComponent,
    NewCategoriaAdminComponent,
    CategoriaAdminComponent,
    EditCategoriaAdminComponent,
    ProductoAdminComponent,
    EditProductoAdminComponent,
    SeccionesAdminComponent,
    SubirImagenComponent,
    NosotrosComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [JarwisService,TokenService,AuthService,AfterLoginService,BeforeLoginService,ActivAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
