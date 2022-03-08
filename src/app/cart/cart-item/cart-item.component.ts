import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem?: CartItem;
  @Output() onCartItemQuantityChange = new EventEmitter<number>();
  @Output() onCartItemDelete = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onQuantityChange(quantity: number): void {
    this.onCartItemQuantityChange.emit(quantity);
  }

  onDeleteClick(): void {
    this.onCartItemDelete.emit();
  }
}
