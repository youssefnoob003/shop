// product-details.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  product: Product;

  selectedColor: string;

  changeColor(color: string) {
    this.selectedColor = color;
  }

  ngOnInit() {
    this.selectedColor = this.product ? this.product.displayColor : '';
  }

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
  }
}
