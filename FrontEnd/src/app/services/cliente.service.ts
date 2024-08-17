import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl='http://localhost:65078/';
  myApiUrl='api/Clientes/';
  list: Cliente[];
  private actualizarformulario = new BehaviorSubject<Cliente>({} as any);
  constructor(private http: HttpClient) { }

  guardarCliente(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrl , cliente);
  }
  eliminarCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(this.myAppUrl+this.myApiUrl+ id);
  }
  obtenerClientes(){
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(data => {
      this.list = data as Cliente[];
    })
  }
  actualizar(cliente){
    this.actualizarformulario.next(cliente)
  }
  actualizarCliente(id:number,cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.myAppUrl + this.myApiUrl+id,cliente);
  }
  obtenerCliente$():Observable<Cliente>{
    return this.actualizarformulario.asObservable();
  }
}
