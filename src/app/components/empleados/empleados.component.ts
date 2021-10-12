import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoModel } from 'src/app/model/EmpleadoModel';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  listaEmpleados: EmpleadoModel[] = [];

  constructor(
    private _empleadoService: EmpleadosService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllEmpleados();
  }

  getAllEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data => {
        this.listaEmpleados = data;
    }, error =>{
      console.log(JSON.stringify(error));
      this.toastr.error(JSON.stringify(error), 'Error');
    });
  }
  
  eliminaEmpleado( id: any){
    this._empleadoService.deleteEmpleado(id).subscribe(data => {
      //this.getAllEmpleados();
      this.toastr.success('El empleado fue eliminado con exito', 'Empleado');      
    }, error =>{
      console.log(JSON.stringify(error));
      //this.toastr.error(JSON.stringify(error), 'Error');
    });
    this.toastr.success('El empleado fue eliminado con exito', 'Empleado');      
    this.getAllEmpleados();
    location.reload();
  }
}
