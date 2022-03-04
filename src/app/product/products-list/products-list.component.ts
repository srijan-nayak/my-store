import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productsSubscription?: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productsSubscription = this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnDestroy() {
    this.productsSubscription?.unsubscribe();
  }
}
