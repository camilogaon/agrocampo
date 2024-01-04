import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JarwisService } from '../services/jarwis.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  public form ={
    email: null,
    password:null
  };

  public error = null;
  constructor(private Jarwis:JarwisService, private Token:TokenService, private router:Router, private Auth:AuthService){}

  onSubmit(){
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  isAdminUser: boolean = false;

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    const isAdminEmail = this.form.email === 'admin1@gmail.com' || this.form.email === 'admin2@gmail.com' || this.form.email === 'admin3@gmail.com';
    this.router.navigateByUrl(isAdminEmail ? '/admin-page' : '/inicio');
    this.isAdminUser = isAdminEmail;
  }


  handleError(error: any){
  this.error = error.error.error;
  }
 
  ngOnInit(){

  }
}
