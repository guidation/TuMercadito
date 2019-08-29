    
import { Component, OnInit } from '@angular/core';

import { CarritoService } from '../carrito.service';
import { Food } from '../models/food';
import * as $ from 'jquery';
import { PlatosService } from '../platos.service';
import { AngularFirestore} from "@angular/fire/firestore";
  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  sortFood = 'Sort Food';
  selectedFood = 'Show All';
  platos:Food[];

  aux: Food[];
  constructor( private platosService:PlatosService, private carritoService: CarritoService, private readonly afs: AngularFirestore) { }

  selectChangeHandler(event: any){
    this.selectedFood = event.target.value;
  }

  addCarrito(plato: Food){
    this.carritoService.addCarrito(plato);
  }


  ngOnInit() {
    this.platosService.getPlatos().subscribe(platos =>{
      this.platos = platos;
    })
    console.log()
    $(document).ready(function() {
      $('#value1').keyup(function(e){
          var total = $('#value1').val() * $('#value2').text();
          var e = $('#value2').text();
          $('#sum').html((total).toFixed(2));
          console.log(total);
          console.log(e);

      });
  });
  console.log($('#value1').text())
  this.platosService.getPlatos().subscribe(food => {
    this.platos = food;
  });
  }
}