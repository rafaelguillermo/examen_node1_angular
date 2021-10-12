import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoModel } from '../model/EmpleadoModel';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  url = 'http://localhost:8080/empleado/';

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<EmpleadoModel[]>(this.url+'getall');
  }
  getEmpleado(id: string){
    return this.http.get<EmpleadoModel>(this.url+'getone/'+id);
  }
  postEmpleado(emp: EmpleadoModel){
    return this.http.post(this.url+'save', emp); 
  }
  deleteEmpleado(id: any){    
    return this.http.delete(this.url+'delete/'+id); 
  }
}
