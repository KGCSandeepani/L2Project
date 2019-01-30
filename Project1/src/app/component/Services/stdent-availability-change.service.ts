import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StdentAvailabilityChangeService {

  constructor(private http:HttpClient) { }

  updateStudentData(name:String,avilability: boolean){        
      return this
                .http
                .put('//localhost:3000/todosStudent1/'+name,
                {
                  "name":name,
                  "availability":avilability,                       
                })             
    }

}
