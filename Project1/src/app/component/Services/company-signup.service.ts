import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { company } from 'src/app/component/Model/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanySignupService {

  constructor(private http : HttpClient) { }
  getData():Observable<company[]>{
    return this
              .http
              .get<company[]>('//localhost:3000/todosTempCompany/');
  
}
}
