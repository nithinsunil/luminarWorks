import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { acno: 1000, pwd: "1000", balance: 5000 },
    1001: { acno: 1001, pwd: "1001", balance: 5000 },
    1002: { acno: 1002, pwd: "1002", balance: 5000 },
    1003: { acno: 1003, pwd: "1003", balance: 5000 }
  }


  constructor() { }
}
