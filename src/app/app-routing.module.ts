import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { Carrito2Component } from './carrito2/carrito2.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin/admin.component";
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { CheckoutComponent } from "./checkout/checkout.component";
import { InicioComponent } from "./inicio/inicio.component";



const routes: Routes = [
  {path:"carrito", component:CarritoComponent},
  {path:"carrito2", component:Carrito2Component},
  {path: "dashboard", component:DashboardComponent},
  {path: "admin", component:AdminComponent},
  {path: "agregar", component:AgregarComponent},
  {path: "editar", component:EditarComponent},
   { path: '', redirectTo: '/inicio', pathMatch: 'full'},
   {path: "checkout", component:CheckoutComponent},
   {path: "inicio", component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
