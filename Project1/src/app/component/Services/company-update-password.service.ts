import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyUpdatePasswordService {

  constructor(private http:HttpClient) { }

  updateCompanyData(name:String, password:String){    
    
    return this
              .http
              .put('//localhost:3000/todosCompany2/'+name,
              {
                "name":name,
                "password" : password,        
              })             
    }

}
