import { Injectable } from '@angular/core';
import { ReadUnamePswServiceService } from './read-uname-psw-service.service';
import { student } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class GetMaxBatchService {

  student :student[];
  max = 0;
  constructor(private studentService: ReadUnamePswServiceService) { }

  getMaxBatch(){
    this.studentService.getData()
    .subscribe(data => {
      this.student=data;
      this.student.forEach(element => {
        if(element.batch>this.max){
          this.max=element.batch;
          sessionStorage.setItem("maxBatch", this.max.toString());
        }
      });
    });
  }
}
