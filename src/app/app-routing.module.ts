import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaModificaEmpleadoComponent } from './components/crea-modifica-empleado/crea-modifica-empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { UserpublicComponent } from './components/userpublic/userpublic.component';

const routes: Routes = [
  {path: '', component: UserpublicComponent},
  {path: 'usuarios', component: UserpublicComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'modificar-empleado/:id', component: CreaModificaEmpleadoComponent},  
  {path: 'crear-empleado', component: CreaModificaEmpleadoComponent},  
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
