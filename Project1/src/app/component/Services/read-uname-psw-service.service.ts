import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from '../Model/Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReadUnamePswServiceService {

  constructor(private http : HttpClient) { }

  /*sends get request and returns its response data */ 
  getData():Observable<student[]>{
    return this
              .http
              .get<student[]>('//localhost:3000/todos/');
  
}
}
