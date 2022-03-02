import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
