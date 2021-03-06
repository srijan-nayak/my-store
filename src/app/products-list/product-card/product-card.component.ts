import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = { id: 0, name: 'N/A', price: 0, url: '', description: '' };
  }

  ngOnInit(): void {}
}
