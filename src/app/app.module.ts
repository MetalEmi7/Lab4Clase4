import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { AdivinaElNumeroComponent } from './adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadoComponent } from './listado-de-resultado/listado-de-resultado.component';
import { LoginComponent } from './Login/Login.Component';
import { ErrorComponent } from './Error/Error.Component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdivinaMasListadoComponent } from './adivina-mas-listado/adivina-mas-listado.component';

import { Juego } from './Clases/Juego';

const miRuteo = [
{path: "",component: LoginComponent},
{path: "Login",component: LoginComponent},
{path: "Menu",component: MenuComponent},
{path: "**",component: ErrorComponent},
{path: "AdivinaElNum",component: AdivinaElNumeroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadoComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    AdivinaMasListadoComponent
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
