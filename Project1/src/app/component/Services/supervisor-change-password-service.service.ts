import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SupervisorChangePasswordServiceService {

  constructor(private http:HttpClient) { }

  updateSupervisorData(name:String, password:String){    
    
    return this
              .http
              .put('//localhost:3000/todosStaff2/'+name,
              {
                "name":name,
                "password" : password,        
              })             
    }
}
