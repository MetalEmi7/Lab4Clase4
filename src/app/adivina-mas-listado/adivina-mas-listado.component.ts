import { Component, OnInit } from '@angular/core';
import { Juego } from '../Clases/Juego';

@Component({
  selector: 'app-adivina-mas-listado',
  templateUrl: './adivina-mas-listado.component.html',
  styleUrls: ['./adivina-mas-listado.component.css']
})
export class AdivinaMasListadoComponent implements OnInit {

public ListadoJuegos:Array<any>;

  constructor() {
    this.ListadoJuegos = new Array<any>();
  }
  
  ngOnInit() {}

TraerResultadodeJuego(juego:Juego)
{
  this.ListadoJuegos.push();
  console.log(this.ListadoJuegos);
}


}
