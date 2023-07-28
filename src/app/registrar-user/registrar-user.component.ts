import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent {

  constructor(private clienteService:ClienteService,private router:Router){}

  clientes:any;

  ngOnInit():void{
   
  }

  showArticles(){
    this.clientes =this.clienteService.listClientes().subscribe(cliente=>{
      this.clientes = cliente;
      console.log(this.clientes);
    });
  }

  addcliente(nombreCliente:string, cedulaCliente:string, telefonoCliente:string, emailCliente:string, contrasenaCliente:string){
    this.clientes={
      'nombre_cliente': nombreCliente,
      'cedula_cliente': cedulaCliente,
      'telefono_cliente': telefonoCliente,
      'email_cliente': emailCliente,
      'contraseña_cliente': contrasenaCliente,
    }
    this.clienteService.addCliente(this.clientes as any). subscribe(cliente=>{
      this.clientes=cliente
    });
    console.log(this.clientes);

  }
}
