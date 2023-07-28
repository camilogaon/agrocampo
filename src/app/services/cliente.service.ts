import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'http://localhost:8000';
  constructor(private http:HttpClient, private router:Router) { }

  listClientes(){
    return this.http.get<any>(this.url+'/api/clientes');
    }

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'appication/json'
    })
  }

  addCliente(cliente:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/clientes',cliente,this.httpOptions);
  }

}
