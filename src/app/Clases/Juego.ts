export class Juego
{
  /*
  Nombre:string = "";

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

Adivinar(){
  this.Intentos_usuario++; 
  
  if(this.Intentos_usuario <= this.Intentos_sistema){
      if  (this.Numero_Usuario == this.Numero_Secreto)
        {
          this.Mensaje="Usted gano!!!";

          if(this.Modo_Testeo)
          console.info("Evento disparado");
        }
        else{
          this.Mensaje="Numero incorrecto, vuelva a intentarlo";
        }
    }
    else{
      this.Mensaje="Ya ha utilizado todos los intentos. Haga clic en 'Nuevo' para reiniciar el juego con otro numero secreto";
    }


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
  }
}

/*
_YaIntentoCon()
{
  this.Aux_Lista_NumerosUsados = this.Numero_Usuario;
}
*/




}