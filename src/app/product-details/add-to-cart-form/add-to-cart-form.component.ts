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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.product) {
      this.cartService.updateCart(this.product, this.quantity);
      this.isCartItemAdded = true;
    }
  }
}
