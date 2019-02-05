import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddAdminService {
  

  constructor(private http : HttpClient) { }

  getSupervisorData(name:String, uname:String, psw:String , email:String , contactno:String ){
    return this
              .http
              .post('//localhost:3000/todosAdmin',
              {
                "text" : name,
                "text1" : uname,
                "psw" : psw,
                "text2" : email,
                "text3": contactno,          
              }
            );
            
  }


  
  

}
