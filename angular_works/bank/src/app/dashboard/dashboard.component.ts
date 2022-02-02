import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno = ""
  pwd = ""
  amount = ""

  acno1 = ""
  pwd1 = ""
  amount1 = ""

  constructor() { }

  ngOnInit(): void {
  }
  deposit() {
    var acno = this.acno
    var pwd = this.pwd
    var amount = this.amount
    alert("deposit clicked")
  }
  withdraw() {
    alert("withdraw clicked")
  }

}
