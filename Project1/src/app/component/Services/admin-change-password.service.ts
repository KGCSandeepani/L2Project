import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminChangePasswordService {

  constructor(private http:HttpClient) { }

  updateAdminData(name:String, password:String){    
    
    return this
              .http
              .put('//localhost:3000/todosAdmin/'+name,
              {
                "name":name,
                "password" : password,        
              })             
    }

}
