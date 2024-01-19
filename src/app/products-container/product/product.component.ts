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

getImageUrl(prod: Product): string {
  return `../../assets/products/${prod.name.replace(' ', '')}/${prod.displayColor}.png`;
}

IsInStock(prod: Product): boolean {
  return prod.quantity > 0;
}

  @Input()
  product: Product;
}
