import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

addToCart(prod: Product) {
  console.log("cart");
}

prodDetails(prod: Product) {
  console.log("details");
}

  @Input()
  product: Product;
}
