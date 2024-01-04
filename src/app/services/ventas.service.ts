import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  url:string = 'http://localhost:8000';

  constructor( private http: HttpClient, private router:Router) { }

  listVentas(){
    return this.http.get<any>(this.url+'/api/ventas');
  }

 

  listVenta(id_ventas:any){
    return this.http.get<any>(this.url+'/api/venta/'+id_ventas);
  }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
    
  addVenta(ventasList: any[]):Observable<any>{
    return this.http.post<any>(this.url+'/api/ventas',ventasList,this.httpOptions);
  }
 
 
}
