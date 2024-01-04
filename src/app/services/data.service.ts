import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string = 'http://localhost:8000';


  constructor(private http:HttpClient) { }

  uploadData(data:any){
    const headers = new HttpHeaders();
    return this.http.post<any>(this.url+'/api/productos', data,{
      headers: headers
    });
  }
}
