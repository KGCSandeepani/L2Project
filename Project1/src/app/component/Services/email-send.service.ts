import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class EmailSendService {

  constructor(private http: Http) { }

  // sendEmail(from:string,to:string,msg:string,subject:string){
  // //   return this
  // //   .http
  // //   .post('//localhost:3000/contact',
  // //   {
  // //     "text" : from,
  // //     "psw" : to,
  // //     "batch" : msg,
  // //     "sub":subject           
  // //   }
  // // );
  

    //  const url= 'http://localhost:3000/contact/send';
    //  const obj = {
    //     from:from,
    //     to:to,
    //     msg:msg,
    //     subject:subject
    //   };
    //   return this.http.post(url, obj);
    }

  


