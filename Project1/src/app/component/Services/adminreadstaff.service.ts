import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { staff } from 'src/app/component/Model/Staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminreadstaffService {

  constructor(private http : HttpClient) { }
  getData():Observable<staff[]>{
    return this
              .http
              .get<staff[]>('//localhost:3000/todosStaff/');
  
}
}
