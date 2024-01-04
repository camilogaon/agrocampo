import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http:HttpClient) { }


  signup(data:any){
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

  login(data:any){
    return this.http.post(`${this.baseUrl}/login`,data)
  }
}
