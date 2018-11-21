import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AdminAddStaffServiceService {

  constructor(private http : HttpClient) { }

  getSupervisorData(formdata:NgForm){
    return this
              .http
              .post('//localhost:3000/todosStaff',
              {
                "text" : formdata.value.name,
                "text1" : formdata.value.uname,
                "psw" : formdata.value.psw,
                "text2" : formdata.value.email,
                "text3": formdata.value.contactno            
              }
            );
            
  }
}
