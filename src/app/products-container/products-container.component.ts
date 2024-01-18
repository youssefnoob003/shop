import { Component } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {
  searchValue: string;
  searchChanged(search: string) {
    this.searchValue = search;
  }
}
