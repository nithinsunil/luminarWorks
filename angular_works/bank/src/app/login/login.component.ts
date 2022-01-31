import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test = "Your Perfect Banking Partner !"
  accno = "Please enter account number"
  acno = ""
  pwd = ""

  database: any = {
    1000: { acno: 1000, pwd: "1000", balance: 5000 },
    1001: { acno: 1001, pwd: "1001", balance: 5000 },
    1002: { acno: 1002, pwd: "1002", balance: 5000 },
    1003: { acno: 1003, pwd: "1003", balance: 5000 }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  loginAlert() {
    alert("Login button clicked") // event binding
  }

  getacno(event: any) {
    console.log(event.target.value); // logging entered value

  }
  getpass(event: any) {
    console.log(event.target.value);

  }

  login() {
    let acno = this.acno
    let pwd = this.pwd
    let db = this.database

    if (acno in db) {

      if (pwd == db[acno]["pwd"]) {
        alert("Login success")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("invalid password")
      }
    }
    else {
      alert("invalid account number")
    }

  }
}