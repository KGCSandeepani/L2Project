import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoOfCompany } from '../Model/NoOfCompany';
import { Observable } from 'rxjs';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';

@Injectable({
  providedIn: 'root'
})
export class GetNoOfCompanyService {

  constructor(private http : HttpClient,private set:CountNumberReqCompanyService) { }

  /*sends get request and returns its response data */ 
  getData():Observable<NoOfCompany>{
    return this
              .http
              .get<NoOfCompany>('//localhost:3000/todosNoOfCompany/amount');
  
  }

}
