import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../Model/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingStudentService {

  constructor(private http : HttpClient) { }

  getData(uname:String):Observable<student>{
    return this
              .http
              .get<student>('//localhost:3000/todos/'+uname);  
  }

}
