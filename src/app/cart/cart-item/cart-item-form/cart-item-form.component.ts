import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-form',
  templateUrl: './cart-item-form.component.html',
  styleUrls: ['./cart-item-form.component.css'],
})
export class CartItemFormComponent implements OnInit {
  @Input() index?: number;
  @Input() quantity?: number | string;
  @Output() onCartItemQuantityChange = new EventEmitter<number>();
  @Output() onCartItemDelete = new EventEmitter<void>();

  readonly selectOptionValues: number[] = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

  constructor() {}

  ngOnInit(): void {}

  onQuantityChange(): void {
    this.onCartItemQuantityChange.emit(+this.quantity!);
  }

  onDeleteClick(): void {
    this.onCartItemDelete.emit();
  }
}
