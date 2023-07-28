import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ListaproductoService } from '../services/listaproducto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent {

  @ViewChild('nombreProducto') nombreProductoRef!: ElementRef<HTMLHeadingElement>;
  @ViewChild('descripcionProducto') descripcionProductoRef!: ElementRef<HTMLLabelElement>;
  @ViewChild('cantidadProducto') cantidadProductoRef!: ElementRef<HTMLSpanElement>;

  @ViewChild('nombreProducto2') nombreProducto2Ref!: ElementRef<HTMLHeadingElement>;
  @ViewChild('descripcionProducto2') descripcionProducto2Ref!: ElementRef<HTMLLabelElement>;
  @ViewChild('cantidadProducto2') cantidadProducto2Ref!: ElementRef<HTMLSpanElement>;

  @ViewChild('nombreProducto3') nombreProducto3Ref!: ElementRef<HTMLHeadingElement>;
  @ViewChild('descripcionProducto3') descripcionProducto3Ref!: ElementRef<HTMLLabelElement>;
  @ViewChild('cantidadProducto3') cantidadProducto3Ref!: ElementRef<HTMLSpanElement>;

  @ViewChild('nombreProducto4') nombreProducto4Ref!: ElementRef<HTMLHeadingElement>;
  @ViewChild('descripcionProducto4') descripcionProducto4Ref!: ElementRef<HTMLLabelElement>;
  @ViewChild('cantidadProducto4') cantidadProducto4Ref!: ElementRef<HTMLSpanElement>;

  @ViewChild('nombreProducto5') nombreProducto5Ref!: ElementRef<HTMLHeadingElement>;
  @ViewChild('descripcionProducto5') descripcionProducto5Ref!: ElementRef<HTMLLabelElement>;
  @ViewChild('cantidadProducto5') cantidadProducto5Ref!: ElementRef<HTMLSpanElement>;


  numero : number =1;
  numero2 : number =1;
  numero3 : number =1;
  numero4 : number =1;
  numero5 : number =1;
  decrementar(){
    if (this.numero > 1) {
      this.numero--;
    }
  }
  incrementar(){
    this.numero++;
  }
  decrementar2(){
    if (this.numero2 > 1) {
      this.numero2--;
    }
  }
  incrementar2(){
    this.numero2++;
  }
  decrementar3(){
    if (this.numero3 > 1) {
      this.numero3--;
    }
  }
  incrementar3(){
    this.numero3++;
  }
  decrementar4(){
    if (this.numero4 > 1) {
      this.numero4--;
    }
  }
  incrementar4(){
    this.numero4++;
  }
  decrementar5(){
    if (this.numero5 > 1) {
      this.numero5--;
    }
  }
  incrementar5(){
    this.numero5++;
  }
  
  
  


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

  addCarrito(){
    const nombreProducto = this.nombreProductoRef.nativeElement.innerText;
    const descripcionProducto = this.descripcionProductoRef.nativeElement.innerText;
    const cantidadProducto = this.cantidadProductoRef.nativeElement.innerText;
    this.listaproductos={
      'nombre_producto': nombreProducto,
      'descripcion_producto': descripcionProducto,
      'cantidad_producto': cantidadProducto,
    };
    this.listaproductoService.addProducto(this.listaproductos as any). subscribe(listaproducto=>{
      this.listaproductos=listaproducto
    });
    console.log(this.listaproductos);

  }

  addCarrito2(){
    const nombreProducto2 = this.nombreProducto2Ref.nativeElement.innerText;
    const descripcionProducto2 = this.descripcionProducto2Ref.nativeElement.innerText;
    const cantidadProducto2 = this.cantidadProducto2Ref.nativeElement.innerText;
    this.listaproductos={
      'nombre_producto': nombreProducto2,
      'descripcion_producto': descripcionProducto2,
      'cantidad_producto': cantidadProducto2,
    };
    this.listaproductoService.addProducto(this.listaproductos as any). subscribe(listaproducto=>{
      this.listaproductos=listaproducto
    });
    console.log(this.listaproductos);

  }

  addCarrito3(){
    const nombreProducto3 = this.nombreProducto3Ref.nativeElement.innerText;
    const descripcionProducto3 = this.descripcionProducto3Ref.nativeElement.innerText;
    const cantidadProducto3 = this.cantidadProducto3Ref.nativeElement.innerText;
    this.listaproductos={
      'nombre_producto': nombreProducto3,
      'descripcion_producto': descripcionProducto3,
      'cantidad_producto': cantidadProducto3,
    };
    this.listaproductoService.addProducto(this.listaproductos as any). subscribe(listaproducto=>{
      this.listaproductos=listaproducto
    });
    console.log(this.listaproductos);

  }

  addCarrito4(){
    const nombreProducto4 = this.nombreProducto4Ref.nativeElement.innerText;
    const descripcionProducto4 = this.descripcionProducto4Ref.nativeElement.innerText;
    const cantidadProducto4 = this.cantidadProducto4Ref.nativeElement.innerText;
    this.listaproductos={
      'nombre_producto': nombreProducto4,
      'descripcion_producto': descripcionProducto4,
      'cantidad_producto': cantidadProducto4,
    };
    this.listaproductoService.addProducto(this.listaproductos as any). subscribe(listaproducto=>{
      this.listaproductos=listaproducto
    });
    console.log(this.listaproductos);

  }

  addCarrito5(){
    const nombreProducto5 = this.nombreProducto5Ref.nativeElement.innerText;
    const descripcionProducto5 = this.descripcionProducto5Ref.nativeElement.innerText;
    const cantidadProducto5 = this.cantidadProducto5Ref.nativeElement.innerText;
    this.listaproductos={
      'nombre_producto': nombreProducto5,
      'descripcion_producto': descripcionProducto5,
      'cantidad_producto': cantidadProducto5,
    };
    this.listaproductoService.addProducto(this.listaproductos as any). subscribe(listaproducto=>{
      this.listaproductos=listaproducto
    });
    console.log(this.listaproductos);

  }


  
    
}
