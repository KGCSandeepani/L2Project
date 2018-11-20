import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminUpdateStudentService {
  [x: string]: any;

  constructor() { }
  name:String;
  /*sends get request and returns its response data */ 
  updateStudentData(name:String){
    this.name=name;
    
    return this
              .http
              .update('//localhost:3000/todos/'+this.name);
    }
}
