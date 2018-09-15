import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminDeleteStudentServiceService {

  constructor(private http : HttpClient) { }
name:String;
  /*sends get request and returns its response data */ 
  deleteStudentData(name:String){
    this.name=name;
    
    return this
              .http
              .delete('//localhost:3000/todos/'+this.name);
    }
}
