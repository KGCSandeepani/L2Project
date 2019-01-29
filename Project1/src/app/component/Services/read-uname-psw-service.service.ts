import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../Model/Student';
import { Observable } from 'rxjs';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';


@Injectable({
  providedIn: 'root'
})
export class ReadUnamePswServiceService {

  constructor(private http : HttpClient) { }
  name:String;
  /*sends get request and returns its response data */ 
  getData():Observable<student[]>{
    return this
              .http
              .get<student[]>('//localhost:3000/todos/');
  
  }

  getId(name: string) {
    console.log(name+" name in getItem");
    sessionStorage.setItem("name", name);
  }

  setId(){
    this.name = sessionStorage.getItem("name");
    console.log(this.name+"name in setItem");
    return sessionStorage.getItem("name");
  }

  reteriveData(){
    this.name = sessionStorage.getItem("name");
    console.log(this.name+"id in setItem");
    return this
            .http
            .get('//localhost:3000/todos/'+this.name);

  }


  reteriveComData():Observable<StuSelectedCompany[]>{
  //  console.log(this.name+"id in reteriveComData");
  //  this.name = sessionStorage.getItem("name");
    return this
              .http
              .get<StuSelectedCompany[]>('//localhost:3000/StuSelectedCompany/');
    }

}
