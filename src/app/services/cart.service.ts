import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItems: CartItem[] = [];

  constructor() {}

  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  addCartItem(product: Product, quantity: number): void {
    const foundProduct = this._cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (foundProduct) {
      foundProduct.quantity += quantity;
    } else {
      this._cartItems.push({ product, quantity });
    }
  }
}
