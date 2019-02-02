import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentSelectedCompanyService {

  constructor(private http : HttpClient) { }

  getStuSelectedCompany(name: String, organization: String){
    return this
              .http
              .post('//localhost:3000/StuSelectedCompany',
              {
                "text" : name,
                //"num" : num,
                "organization" : organization             
              }
            );
            
  }

}
