import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  productSubscription?: Subscription;
  isProductFound = true;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.productSubscription = this.productService
      .getProduct(productId)
      .subscribe((product) => {
        this.product = product;
        this.isProductFound = this.product !== undefined;
      });
  }

  ngOnDestroy() {
    this.productSubscription?.unsubscribe();
  }
}
