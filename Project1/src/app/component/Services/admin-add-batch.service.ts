import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAddBatchService {

  constructor(private http : HttpClient) { }

  addNewBatch(batch: number, startDate: Date, endDate: Date){
    return this
              .http
              .post('//localhost:3000/Batch',
              {
                "batch" : batch,
                "startDate" : startDate,
                "endDate" : endDate,      
              }
            );
            
  }

}
