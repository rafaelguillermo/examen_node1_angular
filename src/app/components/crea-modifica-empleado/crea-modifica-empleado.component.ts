import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoModel } from 'src/app/model/EmpleadoModel';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-crea-modifica-empleado',
  templateUrl: './crea-modifica-empleado.component.html',
  styleUrls: ['./crea-modifica-empleado.component.scss']
})
export class CreaModificaEmpleadoComponent implements OnInit {

  form: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _empleadoService: EmpleadosService,
    private aRoute: ActivatedRoute
    ) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      edad:['', Validators.required]
    });
    this.id = aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.editarProducto();
  }
  
  editarProducto(){
    if(this.id !== null){
      this._empleadoService.getEmpleado(this.id).subscribe(data => {
        this.form.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          edad: data.edad
        });
      }, error =>{
        console.log(error);
        this.toastr.error(JSON.stringify(error), 'Error');
      });
    }
  }
  addModEmpleado(){
    const EMPLEADO: EmpleadoModel = {
      idUnico: this.id !== null ? this.id : '',
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      edad: this.form.get('edad')?.value,
      estado: 'ACTIVO'      
    }
    console.log(EMPLEADO);

    this._empleadoService.postEmpleado(EMPLEADO).subscribe(data => {
      this.toastr.success('El empleado fue registrado con exito', 'Empleado');
      this.router.navigate(['empleados']);
    }, error =>{
      console.log(error);
      this.toastr.error(JSON.stringify(error), 'Error');
    });        
  }
}
