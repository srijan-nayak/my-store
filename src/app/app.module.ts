import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './products-list/product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddToCartFormComponent } from './product-details/add-to-cart-form/add-to-cart-form.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartItemFormComponent } from './cart/cart-item/cart-item-form/cart-item-form.component';
import { CheckoutFormComponent } from './cart/checkout-form/checkout-form.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddToCartFormComponent,
    CartComponent,
    CartItemComponent,
    CartItemFormComponent,
    CheckoutFormComponent,
    OrderPlacedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
