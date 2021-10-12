import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetailModel } from '../model/UserDetailModel';

@Injectable({
  providedIn: 'root'
})
export class UserpublicService {

  url = 'https://gorest.co.in/public/v1/users';

  constructor(private http: HttpClient) { }

  getUsers(pagina: any){
    /*console.log(pagina);
    if(pagina !== null && pagina.trim().length > 0){      
      return this.http.get(this.url + "?page="+pagina);
    }else{
      return this.http.get(this.url);
    } */
    return this.http.get(this.url);
  }  

}
