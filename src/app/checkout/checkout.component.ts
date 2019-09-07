import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { PlatosService } from '../platos.service';
import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public _MessageService: MessageService, private platosService:PlatosService, private carritoService: CarritoService,) { }
  
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log(form);
    console.log(form.asunto)
      console.log(form.nombre)
    });
    console.log(this.carrito);
    console.log(form);
    }
     
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
  ngOnInit() {
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
