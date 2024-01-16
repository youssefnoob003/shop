import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product: {
    "id": number;
    "name": string;
    "price": number;
    "category": string;
    "image": string;
    "discount": number;
    "instock": boolean;
  };
}
