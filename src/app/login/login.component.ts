import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  abhay(){

    console.log("Method Created By AbhayTechHive Again Changed..!");
  }

  vishvas(){
    console.log("vishvas Changed By Abhay");

    console.log("Method Created By AbhayTechHive vishvas");
  }

  vishvas(){
    console.log("vishvas changed vishvas vishvas vishvas");

  }

}
