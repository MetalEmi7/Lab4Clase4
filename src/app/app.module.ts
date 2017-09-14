import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; //Necesario para doble bindeo
import { AppComponent } from './app.component';

//Necesario para rutear
import { RouterModule, Routes } from '@angular/router';

//Componentes generales
import { LoginComponent } from './Login/Login.Component';
import { ErrorComponent } from './Error/Error.Component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';

//Componentes de juegos y/o resultados
import { ListadoDeResultadoComponent } from './listado-de-resultado/listado-de-resultado.component';
import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { AdivinaMasListadoComponent } from './adivina-mas-listado/adivina-mas-listado.component';
import { ActividadAritmeticaComponent } from './actividad-aritmetica/actividad-aritmetica.component';

//Entidades
import { Juego } from './Clases/Juego';

const miRuteo = [
{path: "login",component: LoginComponent},
{path: "menu",component: MenuComponent},
{path: "adivinaElNum",component: AdivinaElNumeroComponent},
{path: "actividadAritmetica",component: ActividadAritmeticaComponent},
{path: "listaDeResultados",component: ListadoDeResultadoComponent},
{path: "adivina+Lista",component: AdivinaMasListadoComponent},
{path: "",component: LoginComponent},
{path: "**",component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadoComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    ActividadAritmeticaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
