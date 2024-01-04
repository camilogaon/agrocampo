import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent {


  public form={
    id:null,
    email:null,
    name:null,
    password:null,
    password_confirmation:null
  };


  public error:any = {};

  


  constructor(private Jarwis:JarwisService,private Token:TokenService, private router:Router, private Auth:AuthService){}

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  

  handleError(error:any){
    this.error =error.error.errors;
}


ngOnInit(){
  
}
}
