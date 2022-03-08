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

  get totalAmount(): number {
    return this._cartItems
      .map(({ product, quantity }) => product.price * quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  getCartItem(productId: number): CartItem | null {
    const foundCartItem = this._cartItems.find(
      ({ product }) => product.id === productId
    );
    return foundCartItem ? foundCartItem : null;
  }

  updateCart(product: Product, quantity: number): void {
    const foundProduct = this.getCartItem(product.id);
    if (foundProduct) {
      foundProduct.quantity = quantity;
    } else {
      this._cartItems.push({ product, quantity });
    }
  }

  removeCartItem(productId: number): void {
    this._cartItems = this._cartItems.filter(
      (cartItem) => cartItem.product.id !== productId
    );
  }

  clearCart(): void {
    this._cartItems = [];
  }
}
