import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Food } from '../carrito/food';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  isCollapsed = false;
  carrito: Food[] = this.carritoService.getCarrito();

  selectChangeHandler(event: any, plato:Food){
    if(event.target.value == '0'){
      var i = this.carrito.indexOf(plato)
      this.carrito.splice(i, 1);
    }else this.selectedOption = event.target.value;
  }

  selectedOption = '';

  ngOnInit() {
  }

}
