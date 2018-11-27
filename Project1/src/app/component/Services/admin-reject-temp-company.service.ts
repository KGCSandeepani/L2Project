import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminRejectTempCompanyService {

  constructor(private http : HttpClient) { }
  name:String;

   /*sends get request and returns its response data */ 
   deleteTempCompanyData(name:String){
    this.name=name;
    
    return this
              .http
              .delete('//localhost:3000/todosTempCompany/'+this.name);
    }
}
