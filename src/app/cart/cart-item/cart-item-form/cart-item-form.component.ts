import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item-form',
  templateUrl: './cart-item-form.component.html',
  styleUrls: ['./cart-item-form.component.css'],
})
export class CartItemFormComponent implements OnInit {
  @Input() cartItem?: CartItem;

  readonly selectOptionValues: number[] = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  get quantity(): number {
    return this.cartItem!.quantity;
  }

  set quantity(newQuantity: number | string) {
    this.cartItem!.quantity = +newQuantity;
  }

  onQuantityChange(): void {
    this.cartService.updateCart(
      this.cartItem!.product,
      this.cartItem!.quantity
    );
  }

  onDeleteClick(): void {
    this.cartService.removeCartItem(this.cartItem!.product.id);
  }
}
