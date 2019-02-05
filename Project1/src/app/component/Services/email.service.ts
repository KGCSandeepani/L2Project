import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient) { }

  rstpw(formdata:NgForm){
    return this
    .http
    .post('//localhost:3000/todosEmail',
    {
      "text" : formdata.value.to,
      "text1" : formdata.value.from,
      "text2" : formdata.value.sub,
      "text3" : formdata.value.body,        
    });
  }
}
