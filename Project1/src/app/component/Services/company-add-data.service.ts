import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyAddDataService {

  constructor(private http : HttpClient) { }
  getCompanyData(formdata:NgForm){
    return this
              .http
              .post('//localhost:3000/todosTempCompany',
              {
                "text" : formdata.value.cname,
                "text1" : formdata.value.cpname,
                "text2" : formdata.value.location,
                "text3" : formdata.value.contactno,
                "text4": formdata.value.email,
                "psw":formdata.value.psw            
              }
            );
            
  }

}



