import { Injectable } from '@angular/core';
import { Food } from './carrito/food';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {


  constructor() { }

  total: number = 0;
  carrito = [];
  
  
  addCarrito(plato: Food){
    var aux = 0;

    for(let i of this.carrito){
      if(i.name == plato.name){
        if(i.cant == 10){
          return;
        }
        i.cant++;
        aux++;
      }
    }
    if(aux==0){
      plato.cant = 1;
      this.carrito.push(plato);  
    }
  }

  getCarrito(){
    return this.carrito;
  }

  updateTotal(total:number){
    this.total = total;
    return this.total;
  }

  getTotal(){
    return this.total;
  }


  
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  



}