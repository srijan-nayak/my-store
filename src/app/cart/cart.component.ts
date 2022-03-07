import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  get isCartEmpty(): boolean {
    return this.cartService.cartItems.length === 0;
  }

  get cartItems(): CartItem[] {
    return this.cartService.cartItems;
  }

  get cartTotal(): number {
    return this.cartService.totalAmount;
  }
}
