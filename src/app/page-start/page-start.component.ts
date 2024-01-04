import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ListaproductoService } from '../services/listaproducto.service';
import { Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { JarwisService } from '../services/jarwis.service';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-start',
  templateUrl: './page-start.component.html',
  styleUrls: ['./page-start.component.css']
})
export class PageStartComponent {

  contacts: any;


  constructor(private fb:FormBuilder, private Jarwis:JarwisService, private listaproductoService: ListaproductoService, private router:Router, private productoService:ProductoService, private tokenService:TokenService, private authService:AuthService, private contactService:ContactService) {}

  
  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get cedula(){
    return this.formUser.get('cedula') as FormControl;
  }
  get telefono(){
    return this.formUser.get('telefono') as FormControl;
  }
 

  formUser =this.fb.group({
    'nombre':['', Validators.required],
    'cedula':['', Validators.required],
    'telefono':['', Validators.required],
  });
 
  procesar(){
    console.log(this.formUser.value);
  }

  ngOnInit():void{
    this.showContacts();

   }

   showContacts(){
    this.contacts=this.contactService.listContact().subscribe(contact=>{
      this.contacts=contact;
      console.log(this.contacts);
      
    });
  }

  add(cedula_contact:string,nombre_contact:string, telefono_contact:string, mensaje:string){
    this.contacts={
    'cedula_contact': cedula_contact,
    'nombre_contact': nombre_contact,
    'telefono_contact': telefono_contact,
    'mensaje': mensaje
    };
    this.contactService.addContact(this.contacts as any).subscribe(contact=>{
      this.contacts=contact
    });
    console.log(this.contacts);
    this.router.navigateByUrl('/');

    }
    
}
