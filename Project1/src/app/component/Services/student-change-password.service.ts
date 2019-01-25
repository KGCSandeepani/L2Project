import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentChangePasswordService {

  constructor(private http:HttpClient) { }

  updateStudentData(name:String, password:String){    
    
    return this
              .http
              .put('//localhost:3000/todosStudent/'+name,
              {
                "name":name,
                "password" : password,        
              })             
    }
}
