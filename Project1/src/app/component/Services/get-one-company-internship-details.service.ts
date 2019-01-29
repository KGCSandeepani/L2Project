import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInternshipDetails } from 'src/app/component/Model/CompanyInternshipDetails';

@Injectable({
  providedIn: 'root'
})
export class GetOneCompanyInternshipDetailsService {

  constructor(private http : HttpClient) { }

  getData(name : String):Observable<CompanyInternshipDetails>{
    return this
              .http
              .get<CompanyInternshipDetails>('//localhost:3000/CompanyInternshipDetails/'+name);
  
  }
  
}
