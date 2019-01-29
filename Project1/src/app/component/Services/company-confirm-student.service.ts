import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyConfirmStudentService {

  constructor(private http:HttpClient) { }

  updateCompanyInternshipDetails(name : String, companyConfirmation: boolean){    
    
    return this
              .http
              .put('//localhost:3000/CompanyInternshipDetails/'+name,
              {
                "companyConfirmation":companyConfirmation,       
              })             
    }

}
