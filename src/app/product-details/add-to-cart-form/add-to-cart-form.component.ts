import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrls: ['./add-to-cart-form.component.css'],
})
export class AddToCartFormComponent implements OnInit {
  @Input() product?: Product;
  quantity = 1;
  isCartItemAdded = false;

  readonly selectOptionValues: number[] = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.product) {
      const foundCartItem = this.cartService.getCartItem(this.product.id);
      if (foundCartItem) {
        this.quantity = foundCartItem.quantity;
        this.isCartItemAdded = true;
      }
    }
  }

  onSubmit(): void {
    if (this.product) {
      this.cartService.updateCart(this.product, this.quantity);
      this.isCartItemAdded = true;
    }
  }
}
