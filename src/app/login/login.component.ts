import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User:string;
Pass:string;


  constructor() { }


  Loguearse()
  {
    if (this.User == "admin" && this.Pass == "Odin321") {
      
    }
  }

  ngOnInit() {
  }

}
