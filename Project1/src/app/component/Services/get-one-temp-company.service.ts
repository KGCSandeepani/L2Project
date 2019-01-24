import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { company } from '../Model/Company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetOneTempCompanyService {

  constructor(private http : HttpClient) { }

  getData(name:String):Observable<company>{
    return this
              .http
              .get<company>('//localhost:3000/todosTempCompany/'+name);  
  }

}
