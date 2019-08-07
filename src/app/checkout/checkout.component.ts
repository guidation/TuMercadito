import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }
  
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    console.log(form);
    console.log(form.asunto)
    });
    }
  ngOnInit() {
  }

}
