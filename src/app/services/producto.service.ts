import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = 'http://localhost:8000';


  constructor( private http: HttpClient, private router:Router) { }

  listProductos(){
    return this.http.get<any>(this.url+'/api/productos');
  }
    
  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addProducto(producto:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/productos', producto,this.httpOptions);
  }
    

  find(id_producto:number): Observable<any>{
    return this.http.get(this.url+'/api/producto/'+id_producto);
  }

  update(id_producto:number,producto:any):Observable<any>{
    return this.http.put(this.url+'/api/producto/'+id_producto,producto,this.httpOptions);
  }

  deleteProducto(id_producto:any):Observable<any>{
    return this.http.delete<any>(this.url+'/api/producto/'+id_producto,this.httpOptions);
  }

}
