import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentConfirmCompanyService {

  constructor(private http:HttpClient) { }

  // updateStudentData(name:String, selectedCompany:String){    
    
  //   return this
  //             .http
  //             .put('//localhost:3000/todosStudent1/'+name,
  //             {
  //               "name":name,
  //               "selectedCompany" : selectedCompany,        
  //             })             
  // }

  addCompanyInternshipDetails(name:String, organization:String, batch: number){    
      return this
                .http
                .post('//localhost:3000/CompanyInternshipDetails',
                {
                  "text":name,
                  "organization" : organization, 
                  "num" : batch,           
                }
              );
              
    
  }
}
