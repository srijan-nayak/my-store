import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  name: string = '';
  cardNumber: string = '';
  address: string = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router
      .navigateByUrl('/order-placed', {
        state: { name: this.name, total: this.cartService.totalAmount },
      })
      .then(() => this.cartService.clearCart());
  }
}
