import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from 'src/app/component/Model/Batch';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GetPresentBatchService {

  batch1 : Batch[];
  batch2 : Array<Batch> = [];
  date = new Date();
  date1;
  i=0;

  constructor(private http : HttpClient) { }

  getAllData():Observable<Batch[]>{
    return this
              .http
              .get<Batch[]>('//localhost:3000/Batch/');
  }

  getPresentBatch(){
    this.getAllData()
    .subscribe(data=> {this.batch1=data;

      this.batch1.forEach(element => {
        this.date1=new Date(element.endDate);

        if(this.date1 >= this.date){
          this.batch2[this.i] = element;
        }
      });
      return this.batch2;
    });
    //return this.batch2;
  }

  getBatches(){
    this.getPresentBatch();
    return this.batch2;
  }
}
