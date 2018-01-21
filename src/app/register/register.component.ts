import { Component, OnInit } from '@angular/core';

import { Register } from './register'

import { HttpClientModule } from '@angular/common/http'; 
import { Http, HttpModule } from '@angular/http';

import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data : Register = {
    id: 0,
    email: "a",
    password: "a",
    matchingPassword: "a",
    firstName: "a",
    lastName: "a",
    userName: "a"};

  dupa : any;
  dupa2 : any;
  tmp : string;

  username : any;

  constructor(
    private http : Http
  ) { }

  ngOnInit() {

  }

  test  =
  {
    "id": 0,
    "email": "testtest1@asdf.pl",
    "password": "string",
    "matchingPassword": "string",
    "firstName": "string",
    "lastName": "string",
    "userName": "teeest"
  }

  createAccount(){

    this.dupa = document.getElementById("email");
    this.tmp = <string> this.dupa.value;
    this.data.email = this.tmp;
    console.log("email: " + this.tmp);

    this.dupa = document.getElementById("password");
    this.data.password = this.dupa.value;
    console.log("password: " + this.data.password);

    this.dupa = document.getElementById("matchingPassword");
    this.data.matchingPassword = this.dupa.value;
    console.log("matching password" + this.data.matchingPassword);

    this.dupa = document.getElementById("firstName");
    this.data.firstName = this.dupa.value;
    console.log("first name" + this.data.firstName);

    this.dupa = document.getElementById("lastName");
    this.data.lastName = this.dupa.value;
    console.log("last name" + this.data.lastName);

    this.dupa = document.getElementById("username");
    this.data.userName = this.dupa.value;
    console.log("first name" + this.data.userName);

    this.data.id = 0;

    console.log("wysylam nowego uzytkownika");
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post("http://localhost:8080/registration", this.data, options).toPromise()
             //.then(this.extractData)
             .catch(this.handleErrorPromise);
  }
  //extractData : any;
  handleErrorPromise : any;
}
