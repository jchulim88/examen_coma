import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription:Subscription;
  cliente:Cliente;
  idCliente = 0;
  constructor(private formBuilder: FormBuilder, private clienteService:ClienteService,
    private toastr:ToastrService){
    this.form = this.formBuilder.group({
      id:0,
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.required,Validators.maxLength(3)]],
      correo_electronico:['',[Validators.required,Validators.email]],
      tipo_usuario:['',[Validators.required]],
    })
  }
  ngOnInit():void{
   this.subscription = this.clienteService.obtenerCliente$().subscribe( data =>{
      console.log(data);
      this.cliente = data;
      this.form.patchValue({
        nombre:this.cliente.nombre,
        apellido:this.cliente.apellido,
        edad:this.cliente.edad,
        correo_electronico:this.cliente.correo_electronico,
        tipo_usuario:this.cliente.tipo_usuario
      });
      this.idCliente = this.cliente.id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  guardarCliente(){
    if(this.idCliente === 0){
this.agregar();

    }else{
      this.editar();
    }
    
  }
  agregar(){
    const cliente:Cliente =
    {
      nombre:this.form.get('nombre').value,
      apellido:this.form.get('apellido').value,
      edad:this.form.get('edad').value,
      correo_electronico:this.form.get('correo_electronico').value,
      tipo_usuario:this.form.get('tipo_usuario').value,
    }
    this.clienteService.guardarCliente(cliente).subscribe(data=>{
      this.toastr.success("Registro agregado", 'Se agrego cliente');
      this.clienteService.obtenerClientes();
      this.form.reset();
    });
  }
  editar(){
    const cliente:Cliente =
    {
      id:this.cliente.id,
      nombre:this.form.get('nombre').value,
      apellido:this.form.get('apellido').value,
      edad:this.form.get('edad').value,
      correo_electronico:this.form.get('correo_electronico').value,
      tipo_usuario:this.form.get('tipo_usuario').value,
    }
    this.clienteService.actualizarCliente(this.idCliente,cliente).subscribe(data=>{
      this.toastr.info("Registro actualizado", 'Se actualizo el cliente');
      this.clienteService.obtenerClientes();
      this.form.reset();
      this.idCliente=0;
    })
  }
}
