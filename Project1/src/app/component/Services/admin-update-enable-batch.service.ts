import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminUpdateEnableBatchService {

  constructor(private http:HttpClient) { }

  updateEnabilityOfBatch(batch: number, enable: boolean){
    
    return this
              .http
              .put('//localhost:3000/Batch/'+batch,
            {
              "batch":batch,
              "enable" : enable,            
            })
    }

}
