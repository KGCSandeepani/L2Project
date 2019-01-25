import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
//import { format } from 'path';

@Injectable({
  providedIn: 'root'
})
export class AdminUpdateStudentService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  name:String;
  /*sends get request and returns its response data */ 
  updateStudentData(formdata:NgForm,i1:String, i2 : String, i3 : String, name:String){
    this.name=name;
    
    return this
              .http
              .put('//localhost:3000/todos/'+this.name,
              {
                "name":this.name,
                "username" : formdata.value.uname,
                "email" : formdata.value.email,
                "phoneNo" : formdata.value.phoneNo,
                "l1s1" : formdata.value.l1s1,
                "l1s2" : formdata.value.l1s2,
                "l2s1" : formdata.value.l2s1,
                "l2s2" : formdata.value.l2s2,
                "cgpa" : formdata.value.cgpa,
                //"organization1" : formdata.value.organization1,
                //"organization2" : formdata.value.organization2,
                //"organization3" : formdata.value.organization3,
                //"organization4" : formdata.value.organization4,
                //"organization5" : formdata.value.organization5,
                "interest1" : i1, //formdata.value.interest1,
                "interest2" : i2, //formdata.value.interest2,
                "interest3" : i3,  //formdata.value.interest3
                "uploadPdfUrl": formdata.value.uploadPdfUrl 
              })
              //.update('//localhost:3000/todos/'+this.name);
    }
}
