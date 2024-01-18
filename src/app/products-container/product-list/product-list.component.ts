import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  
  products = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 499.99,
      "category": "Electronics",
      "image": "../assets/products/Smartphone.jpg",
      "discount": 0,
      "instock": true
    },
    {
      "id": 2,
      "name": "Running Shoes",
      "price": 79.99,
      "category": "Footwear",
      "image": "../assets/products/RunningShoes.jpg",
      "discount": 0,
      "instock": true
    },
    {
      "id": 3,
      "name": "Coffee Maker",
      "price": 89.99,
      "category": "Appliances",
      "image": "../assets/products/CoffeeMaker.jpg",
      "discount": 0.05,
      "instock": false
    },
    {
      "id": 4,
      "name": "Laptop",
      "price": 899.99,
      "category": "Electronics",
      "image": "../assets/products/Laptop.jpg",
      "discount": 0,
      "instock": true
    },
    {
      "id": 5,
      "name": "Backpack",
      "price": 49.99,
      "category": "Fashion",
      "image": "../assets/products/Backpack.jpg",
      "discount": 0.2,
      "instock": true
    },
    {
      "id": 6,
      "name": "Gaming Console",
      "price": 349.99,
      "category": "Electronics",
      "image": "../assets/products/gaming-console.jpg",
      "discount": 0.3,
      "instock": true
    },
    {
      "id": 7,
      "name": "Hiking Boots",
      "price": 129.99,
      "category": "Footwear",
      "image": "../assets/products/hiking-boots.jpg",
      "discount": 0,
      "instock": false
    },
    {
      "id": 8,
      "name": "Blender",
      "price": 59.99,
      "category": "Appliances",
      "image": "../assets/products/blender.jpg",
      "discount": 0.1,
      "instock": true
    },
    {
      "id": 9,
      "name": "Smartwatch",
      "price": 199.99,
      "category": "Electronics",
      "image": "../assets/products/smartwatch.jpg",
      "discount": 0.3,
      "instock": true
    },
    {
      "id": 10,
      "name": "Denim Jeans",
      "price": 39.99,
      "category": "Fashion",
      "image": "../assets/products/denim-jeans.jpg",
      "discount": 0.2,
      "instock": false
    }
  ]

  @Input()
  searchValue: string;

  all: number = this.products.length;
  inStock: number = this.products.filter(product => product.instock).length;
  outOfStock: number = this.products.filter(product => !product.instock).length;

  filter: string = 'all';

  filterCondition(product: any) {
   if (this.filter === 'inStock') {
      return product.instock;
    } else if (this.filter === 'outOfStock') {
      return !product.instock;
    }

    return true;
  }

  onFilterChange(value: string) {
    this.filter = value;
  }

  searchCondition(product: any) {
    if (!this.searchValue) return true;
    return product.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;
  }
}
