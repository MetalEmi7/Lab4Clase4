import { Component, OnInit ,Input,EventEmitter} from '@angular/core';
import { Juego } from '../Clases/Juego';

@Component({
  selector: 'app-listado-de-resultado',
  templateUrl: './listado-de-resultado.component.html',
  styleUrls: ['./listado-de-resultado.component.css']
})
export class ListadoDeResultadoComponent implements OnInit {
@Input()
  Listado:Array<any> = new Array<any>();

constructor() { }

ngOnInit() {
}

}
