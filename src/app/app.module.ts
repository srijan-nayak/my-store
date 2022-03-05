import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { AddToCartFormComponent } from './cart/add-to-cart-form/add-to-cart-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    ProductCardComponent,
    AddToCartFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
