import { Component, OnInit } from '@angular/core';
import { Juego } from '../Clases/Juego';

//Agregado
import { Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output()
  listaEnviada :EventEmitter<any>= new EventEmitter<any>();

  NuevoJuego:Juego;

  Adivinar()
  {
    this.listaEnviada.emit(this.NuevoJuego);
    this._Inspeccion();
  }

  Modo_Testeo = true;
  frmLogin:boolean = true;
  frmJuego:boolean = false;
  Descripcion:string = "Debe adivinar el numero secreto del 1 al 10, tiene como maximo 3 Intentos_usuario, sino logra adivinarlo debe reiniciar el juego haciendo clic en el boton 'Nuevo', Mucha suerte";
  
  
 Numero_Usuario:any;
  Numero_Secreto:any;
  Mensaje:string="Esperando que introduzca un numero...";
  gane:boolean=false;
  Intentos_usuario:any=0;
  Intentos_sistema:any=3;
  DeshabilitarControl:any=true;




  constructor()  {
    this.GenerarNum();  
    this._Inspeccion();
  }

GenerarNum(){
  this.Numero_Secreto =  Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  this.Intentos_usuario=0;
  this.Numero_Usuario="";
  this.Mensaje="Esperando que introduzca un numero...";  
  this._Inspeccion();
}



Ingresar()
{
  //this.ObjJug.Hora = Date.now();
  this.frmLogin= false;
  this.frmJuego= true;
}





_Inspeccion()
{
  if(this.Modo_Testeo == true)
  {
  console.log("Numero_Usuario - "+this.Numero_Usuario);
  console.log("Numero_Secreto - "+this.Numero_Secreto);
  console.log("Intentos_usuario - "+this.Intentos_usuario);
  console.log("Intentos_sistema - "+this.Intentos_sistema);
  console.log("ListaEnviada - "+this.listaEnviada);
  }
}

/*
_YaIntentoCon()
{
  this.Aux_Lista_NumerosUsados = this.Numero_Usuario;
}
*/

  ngOnInit() {}

}
