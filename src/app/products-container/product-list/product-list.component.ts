import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
addToCart(_t4: { id: number; name: string; price: number; category: string; image: string; }) {
throw new Error('Method not implemented.');
}
  
  products = [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 499.99,
      "category": "Electronics",
      "image": "../assets/products/Smartphone.jpg"
    },
    {
      "id": 2,
      "name": "Running Shoes",
      "price": 79.99,
      "category": "Footwear",
      "image": "../assets/products/RunningShoes.jpg"
    },
    {
      "id": 3,
      "name": "Coffee Maker",
      "price": 89.99,
      "category": "Appliances",
      "image": "../assets/products/CoffeeMaker.jpg"
      
    },
    {
      "id": 4,
      "name": "Laptop",
      "price": 899.99,
      "category": "Electronics",
      "image": "../assets/products/Laptop.jpg"
    },
    {
      "id": 5,
      "name": "Backpack",
      "price": 49.99,
      "category": "Fashion",
      "image": "../assets/products/Backpack.jpg"
    },
    {
      "id": 6,
      "name": "Gaming Console",
      "price": 349.99,
      "category": "Electronics",
      "image": "../assets/products/gaming-console.jpg"
    },
    {
      "id": 7,
      "name": "Hiking Boots",
      "price": 129.99,
      "category": "Footwear",
      "image": "../assets/products/hiking-boots.jpg"
    },
    {
      "id": 8,
      "name": "Blender",
      "price": 59.99,
      "category": "Appliances",
      "image": "../assets/products/blender.jpg"
    },
    {
      "id": 9,
      "name": "Smartwatch",
      "price": 199.99,
      "category": "Electronics",
      "image": "../assets/products/smartwatch.jpg"
    },
    {
      "id": 10,
      "name": "Denim Jeans",
      "price": 39.99,
      "category": "Fashion",
      "image": "../assets/products/denim-jeans.jpg"
    }
  ]
}
