import { Component, OnInit } from '@angular/core';

//Agregados para rutear a otros componentes.
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
User:string;
Pass:string;

  constructor(private route: ActivatedRoute, private router: Router)
  {}

  Loguearse()
  {
    this.router.navigate(["/menu"]);

    console.log("Hola");
    if (this.User == "admin" && this.Pass == "Odin321")
      {}
  }

  ngOnInit() {
  }

}
