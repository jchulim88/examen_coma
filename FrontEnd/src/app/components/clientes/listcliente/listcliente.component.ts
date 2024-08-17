import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listcliente',
  templateUrl: './listcliente.component.html',
  styleUrl: './listcliente.component.css'
})
export class ListclienteComponent implements OnInit{

constructor(public clienteService : ClienteService, public toasr:ToastrService){

}

  ngOnInit():void{
    this.clienteService.obtenerClientes();
  }
 eliminarCliente(id:number){
  if(confirm("Seguro quieres eliminar el registro??")){
    this.clienteService.eliminarCliente(id).subscribe(data =>{
      this.toasr.warning('Registro Eliminado','El cliente fue eliminado con exito');
      this.clienteService.obtenerClientes();
    })
  }
 }
 editar(cliente){
  this.clienteService.actualizar(cliente);
 }

}
