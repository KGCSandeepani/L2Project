import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInternshipDetails } from 'src/app/component/Model/CompanyInternshipDetails';

@Injectable({
  providedIn: 'root'
})
export class GetAllCompanyInternshipDetailsService {

  constructor(private http : HttpClient) { }

  getData():Observable<CompanyInternshipDetails[]>{
    return this
              .http
              .get<CompanyInternshipDetails[]>('//localhost:3000/CompanyInternshipDetails/');
  
  }
}
