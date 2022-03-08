import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  productSubscription?: Subscription;
  quantityInCart?: number;

  isProductFound = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productSubscription = this.productService
      .getProduct(productId)
      .subscribe((product) => {
        this.product = product;
        this.isProductFound = this.product !== undefined;
        if (this.product) {
          const foundCartItem = this.cartService.getCartItem(this.product.id);
          if (foundCartItem) {
            this.quantityInCart = foundCartItem.quantity;
          }
        }
      });
  }

  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }

  updateCart(quantity: number) {
    if (this.product) {
      this.cartService.updateCart(this.product, quantity);
    }
  }
}
