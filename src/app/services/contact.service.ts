import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string = 'http://localhost:8000';

  constructor(private http: HttpClient, private router:Router) { }

  listContact(){
    return this.http.get<any>(this.url+'/api/contacts');
  }

  httpOptions ={
    headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
    }


    addContact(contact:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/contacts',
    contact,this.httpOptions);
    }

}
