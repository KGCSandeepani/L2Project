import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { admin } from 'src/app/component/Model/Admin';

@Injectable({
  providedIn: 'root'
})
export class ViewAdminsService {

  constructor(private http : HttpClient) { }
  getData():Observable<admin[]>{
    return this
              .http
              .get<admin[]>('//localhost:3000/todosAdmin/');
  
}
}





  
