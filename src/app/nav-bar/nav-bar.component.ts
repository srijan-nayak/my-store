import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private cartService: CartService) {}

  get cartCount(): number {
    return this.cartService.cartItems.length;
  }

  ngOnInit(): void {}
}
