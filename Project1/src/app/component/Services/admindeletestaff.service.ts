import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdmindeletestaffService {

  constructor(private http : HttpClient) { }

  name:String;

  deleteStaffData(name:String){
    this.name=name;
    
    return this
              .http
              .delete('//localhost:3000/todosStaff/'+this.name);
    }
}



