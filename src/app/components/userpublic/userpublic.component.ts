import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserPublicModel } from 'src/app/model/UserPublicModel';
import { UserpublicService } from 'src/app/services/userpublic.service';

@Component({
  selector: 'app-userpublic',
  templateUrl: './userpublic.component.html',
  styleUrls: ['./userpublic.component.scss']
})
export class UserpublicComponent implements OnInit {

  listaUsers: UserPublicModel[] = [];
  pagina: string | null;
  pages: number;
  pageActual: number;
  limit:  number;


  constructor(
    private _usuarioServicio: UserpublicService,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) { 
    this.pagina = aRoute.snapshot.paramMap.get('pagina');
    this.pages = 0;
    this.pageActual = 0;
    this.limit = 0;
  }

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser(){    
    this._usuarioServicio.getUsers(this.pagina).subscribe(data => {
        console.log(JSON.stringify(data));

        let jsonObj: any = JSON.parse(JSON.stringify(data));        

        this.listaUsers = <UserPublicModel[]> jsonObj.data;
        this.pages = jsonObj.meta.pagination.pages;
        this.pageActual = jsonObj.meta.pagination.page;
        this.limit = jsonObj.meta.pagination.limit;        
        
    }, error =>{
      console.log(JSON.stringify(error));
      this.toastr.error(JSON.stringify(error), 'Error');
    });
  }

  counter() {
    return new Array(this.pages);
  }

}
