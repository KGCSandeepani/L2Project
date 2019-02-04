import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from 'src/app/component/Model/Batch';

@Injectable({
  providedIn: 'root'
})
export class GetBatchOfStudentService {

  constructor(private http : HttpClient) { }

  getData(batch : number):Observable<Batch>{
    return this
              .http
              .get<Batch>('//localhost:3000/Batch/'+batch);
  
  }

}
