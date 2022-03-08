import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-form',
  templateUrl: './add-to-cart-form.component.html',
  styleUrls: ['./add-to-cart-form.component.css'],
})
export class AddToCartFormComponent implements OnInit {
  @Input() quantity?: number | string;
  @Output() onFormSubmit = new EventEmitter<number>();

  wasItemInCart = false;
  isButtonClicked = false;

  readonly selectOptionValues: number[] = Array(10)
    .fill(0)
    .map((_, i) => i + 1);

  constructor() {}

  ngOnInit(): void {
    if (this.quantity) {
      this.wasItemInCart = true;
    } else {
      this.quantity = 1;
    }
  }

  onChange(): void {
    if (this.isButtonClicked) {
      this.isButtonClicked = false;
      this.wasItemInCart = true;
    }
  }

  onSubmit(): void {
    this.onFormSubmit.emit(+this.quantity!);
    this.isButtonClicked = true;
  }
}
