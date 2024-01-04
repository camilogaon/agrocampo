import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';


import { FormGroup, Validator, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent {

  constructor(private productoService:ProductoService, private router:Router, private toastr: ToastrService, private formBuilder: FormBuilder, private dataService: DataService){
    this.createForm();
    this.form = this.formBuilder.group({
      img_producto: [null, Validators.required]
    });
  }

  productos:any;
  files: any;
  data: any;
  submitted = false;
  form:FormGroup;
  post = new Post();



  onSubmit() {
    this.submitted = true;

    if(this.form.invalid){
      return;
    }
    const formData = new FormData();
    formData.append("img_producto",this.files, this.files.name);

    this.dataService.uploadData(formData).subscribe(res=>{
      this.data=res;
      console.log(this.data);
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      img_producto: [null, Validators.required]
    })
  }

  get f(){
    return this.form.controls;
  }

  uploadImage(event:any){
    this.files = event.target.files[0];
    console.log(this.files);
  }
}
