import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyGetStudentlistService {

  constructor(private http : HttpClient) { }

  getStudentList():Observable<StuSelectedCompany[]>{
    return this
              .http
              .get<StuSelectedCompany[]>('//localhost:3000/StuSelectedCompany/');
  
  }

  getStudentList1(organization : String):Observable<StuSelectedCompany[]>{
    return this
              .http
              .get<StuSelectedCompany[]>('//localhost:3000/StuSelectedCompany/'+organization);
  
  }

}
