import { Component, OnInit ,EventEmitter} from '@angular/core';
import { Juego } from '../Clases/Juego';

import { Input } from '@angular/core';

@Component({
  selector: 'app-listado-de-resultado',
  templateUrl: './listado-de-resultado.component.html',
  styleUrls: ['./listado-de-resultado.component.css']
})
export class ListadoDeResultadoComponent implements OnInit {
@Input()
  Listado:Array<any> = new Array<any>();

constructor(){
  console.log(this.Listado);

}

ngOnInit() {}
}
