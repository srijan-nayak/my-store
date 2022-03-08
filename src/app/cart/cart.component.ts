import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';
import { Product } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  message?: string;

  constructor(private cartService: CartService, private router: Router) {}

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

  updateCartItem(product: Product, quantity: number): void {
    this.cartService.updateCart(product, quantity);
    this.message = `${product.name} quantity changed to ${quantity}!`;
  }

  removeCartItem(product: Product): void {
    this.cartService.removeCartItem(product.id);
    this.message = `${product.name} removed from cart!`;
  }

  checkout(userName: string): void {
    this.router
      .navigateByUrl('/order-placed', {
        state: { name: userName, total: this.cartService.totalAmount },
      })
      .then(() => this.cartService.clearCart());
  }
}
