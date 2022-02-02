import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno = ""
  uname = ""
  pwd = ""
  
  register() {
    var uname = this.uname
    var acno = this.acno
    var pwd = this.pwd

    const result = this.ds.register(acno, uname, pwd)
    if(result){
      alert("successfully registered !!!")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exists!! Please Log in")

    }

  }

  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

}
