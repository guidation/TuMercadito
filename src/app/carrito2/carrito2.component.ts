import { Component, OnInit, TemplateRef } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';


@Component({
  selector: 'app-carrito2',
  templateUrl: './carrito2.component.html',
  styleUrls: ['./carrito2.component.css']
})
export class Carrito2Component implements OnInit {


  
  constructor(private carritoService: CarritoService) { }

  carrito: Food[] = this.carritoService.getCarrito();

  borrarPlato(plato:Food){
      var i = this.carrito.indexOf(plato)
      this.carrito.splice(i, 1);
  }


  selectedOption = '';


  display: boolean = false;

  showModal() {
   this.display = !this.display;  
  }

  add(plato: Food){
    if(plato.cant==10){
      return;
    }else plato.cant++;
  }

  sub(plato: Food){
    if(plato.cant==1){
      return;
    }else plato.cant--;
  }

  total(){
    var aux = 0;
    for(let i of this.carrito){
      aux = aux + (i.cant*i.precio)
    }
    this.carritoService.updateTotal(Math.round(aux));
    return Math.round(aux);
  }

  compraRegistrada(){
    
  }

  ngOnInit() {
  }


}