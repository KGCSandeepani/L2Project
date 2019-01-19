import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GetNoOfCompanyService } from 'src/app/component/Services/get-no-of-company.service';

@Injectable({
  providedIn: 'root'
})
export class CountNumberReqCompanyService {
  public count;

  constructor() { }
  
  getDetails(count){
    console.log(count+' countNumber');
    localStorage.setItem('count', JSON.stringify(count));
  }

  setDetails(){
    console.log(sessionStorage.getItem('count'));
    return localStorage.getItem('count');
  }

  clearDetails(){
    localStorage.removeItem('count');
  }


}
