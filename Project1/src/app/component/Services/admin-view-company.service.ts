import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { company } from 'src/app/component/Model/Company';

@Injectable({
  providedIn: 'root'
})
export class AdminViewCompanyService {

  constructor(private http : HttpClient) { }
  /*sends get request and returns its response data */ 
  getData():Observable<company[]>{
    return this
              .http
              .get<company[]>('//localhost:3000/todosCompany/');
  
  }
}


  
