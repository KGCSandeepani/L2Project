import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
    sessionStorage.setItem("logger", message);
  }

  getMessage(){
    return sessionStorage.getItem("logger");
  }

}
