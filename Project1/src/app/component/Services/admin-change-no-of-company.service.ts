import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AdminChangeNoOfCompanyService {

  constructor(private http : HttpClient) { }

  /*sends get request and returns its response data */ 
  getAmount(amount:number){
    return this
              .http
              .post('//localhost:3000/todosNoOfCompany',
              {                
                "amount" : amount,            
              }
            );
            
  }
}
