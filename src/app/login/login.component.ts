import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRegister : boolean;
  isLogin : boolean;

  constructor() { 

  }

  ngOnInit() {
    this.isRegister = false;
    this.isLogin = true;
  }

  sth() {
   
    
  }

  register() : void {
    this.isRegister = true;
    this.isLogin = false;
  }

  login() : void {
    this.isRegister = false;
    this.isLogin = true;
  }

}
