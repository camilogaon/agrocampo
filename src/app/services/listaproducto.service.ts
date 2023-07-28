import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListaproductoService {

  url:string = 'http://localhost:8000';

  constructor( private http: HttpClient, private router:Router) { }

  listListaproductos(){
    return this.http.get<any>(this.url+'/api/listaproductos');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
    
  addProducto(listaproducto:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/listaproductos',listaproducto,this.httpOptions);
  }
 
  deleteProducto(id:any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/listaproducto/'+id,this.httpOptions);
  }
}
