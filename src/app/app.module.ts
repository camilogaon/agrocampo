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
    PaginaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
