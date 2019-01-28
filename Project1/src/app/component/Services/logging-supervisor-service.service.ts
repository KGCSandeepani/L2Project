import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { staff } from '../Model/Staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingSupervisorServiceService {
  
  constructor(private http : HttpClient) { }

  getData(uname:String):Observable<staff>{
    return this
              .http
              .get<staff>('//localhost:3000/todosStaff/'+uname);  
  }
}
