import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminAddAllStudentService {

  constructor(private http : HttpClient) { }

  /*sends get request and returns its response data */ 
  getStudentData(uname:string, sname:string, psw:string, batch:number){
    return this
              .http
              .post('//localhost:3000/todos',
              {
                "text" : uname,
                "text1" : sname,
                "psw" : psw,
                "batch" : batch           
              }
            );
            
  }
}

