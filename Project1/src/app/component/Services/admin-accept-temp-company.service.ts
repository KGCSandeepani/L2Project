import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { company } from 'src/app/component/Model/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAcceptTempCompanyService {

  constructor(private http : HttpClient) { }
  name:String;
  location:String;
  email:String;
  contactNo:String;
  psw:String;
  s:String;


  getCompanyData(companyName,location,email,contactNo,contactPersonName,psw,doInternship){
    return this
        .http
        .post('//localhost:3000/todosCompany',
        {
          "text" : companyName,
          "text1" : location,
          "text2" : email,
          "text3" : contactNo,
          "text4" : contactPersonName,
          "psw":psw,
          "doInternship":doInternship,          
    }
  );
  

}



}







