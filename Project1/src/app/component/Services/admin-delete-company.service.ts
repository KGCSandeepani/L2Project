import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDeleteCompanyService {

  name:String;

  constructor(private http : HttpClient) { }

  deleteCompanyData(name:String){
    this.name=name;
    
    return this
              .http
              .delete('//localhost:3000/todosCompany/'+this.name);
    }

}
