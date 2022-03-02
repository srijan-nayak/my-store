import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductsListComponent, ProductCardComponent],
  exports: [ProductsListComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
