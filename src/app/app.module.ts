import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AdminComponent } from './admin/admin.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Carrito2Component } from './carrito2/carrito2.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CheckoutComponent,
    CarritoComponent,
    AdminComponent,
    AgregarComponent,
    EditarComponent,
    NavbarComponent,
    InicioComponent,
    Carrito2Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFirestoreModule,
 FormsModule,
 ModalModule.forRoot(),
 
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
