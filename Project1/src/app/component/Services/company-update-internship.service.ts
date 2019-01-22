import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyUpdateInternshipService {

  constructor(private http:HttpClient) { }
  name:String;
  updateCompanyInternshipData(name: String, doInternship: boolean){
    this.name=name;
    
    return this
              .http
              .put('//localhost:3000/todosCompany/'+this.name,
            {
              "name":name,
              "doInternship" : doInternship
            
            })
    }
}
