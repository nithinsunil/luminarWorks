import { Component, OnInit } from '@angular/core';
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
    alert("Registration Success !!!")
    let database = this.ds.database
  }

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

}
