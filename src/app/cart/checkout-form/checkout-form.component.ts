import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Output() onCheckoutFormSubmit = new EventEmitter<string>();
  userName: string = '';
  cardNumber: string = '';
  address: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.onCheckoutFormSubmit.emit(this.userName);
  }
}
