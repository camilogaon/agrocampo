import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listCategorias(){
    return this.http.get<any>(this.url+'/api/categorias');
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addCategoria(categoria:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/categorias',
    categoria,this.httpOptions);
  }

  find(id_categoria:number):Observable<any>{
    return this.http.get(this.url+'/api/categoria/'+id_categoria);
  }

  update(id_categoria:number, categoria: any):Observable<any>{
    return this.http.put(this.url+'/api/categoria/'+id_categoria,categoria, this.httpOptions);
  }


  deleteCategoria(id_categoria:any):Observable<any>{
    return this.http.delete<any>(this.url+'/api/categoria/'+id_categoria,this.httpOptions);
  }
}
