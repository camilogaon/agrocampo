import { Component, OnInit } from '@angular/core';
import { ListaproductoService } from '../services/listaproducto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent {

  constructor(private listaproductoService: ListaproductoService, private router:Router) {}

  listaproductos: any;

  ngOnInit():void{
    this.showArticles();
    }

  showArticles(){
    this.listaproductos =this.listaproductoService.listListaproductos().subscribe(listaproducto=>{
      this.listaproductos = listaproducto;
      console.log(this.listaproductos);
    });
  }

  deleteArticle(id:any){
    this.listaproductoService.deleteProducto(id).subscribe(res => {
    this.listaproductos = this.listaproductos.filter((a:any) => a.id == id);
    }
    );

    }
    
}
