import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from '../services/cart.service';
import { Product } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  message?: string;

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

  updateCartItem(product: Product, quantity: number): void {
    this.cartService.updateCart(product, quantity);
    this.message = `${product.name} quantity changed to ${quantity}!`;
  }

  removeCartItem(product: Product): void {
    this.cartService.removeCartItem(product.id);
    this.message = `${product.name} removed from cart!`;
  }
}
