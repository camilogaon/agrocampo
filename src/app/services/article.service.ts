import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string = 'http://localhost:8000';


  constructor(private http: HttpClient, private router:Router) { }


  listArticles(){
    return this.http.get<any>(this.url+'/api/articles');
  }


  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  addArticle(article:any):Observable<any>{
    return this.http.post<any>(this.url+'/api/articles', article,this.httpOptions);

  }

  find(id:number): Observable<any> {
      return this.http.get(this.url+'/api/article/'+id);
  }

  update(id:number,article:any): Observable<any>{
    return this.http.put(this.url+'/api/article/'+id,article,this.httpOptions);
  }

  deleteArticle(id:any): Observable<any>{
    return this.http.delete<any>(this.url+'/api/article/'+id,this.httpOptions);
  }
}
