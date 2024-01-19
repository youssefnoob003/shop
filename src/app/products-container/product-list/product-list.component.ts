import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  selectedProduct: Product;

  selected(event: Event, product: Product) {
    if (!(event.target as HTMLElement).closest('button')) { 
      this.selectedProduct = product; 
    }
  }

  close(event: Event) {
    if (!((event.target as HTMLElement).closest('.product-button') ||
         (event.target as HTMLElement).closest('.product-description') ||
         (event.target as HTMLElement).closest('img')) ||
         (event.target as HTMLElement).closest('.close-button')) { 
      this.selectedProduct = null; 
    }
  }

  products = [
    {
        "id": 1,
        "name": "Smartphone",
        "price": 499.99,
        "category": "Electronics",
        "description": "Stay connected with the latest technology. Our smartphone features advanced capabilities and a sleek design.",
        "quantity": 1,
        "colors": ["Lavender", "Cream", "Green", "Black"],
        "displayColor": "Lavender",
        "brand": "Samsung",
        "tags": ["smartphone", "electronics", "Samsung"]
    },
    {
        "id": 2,
        "name": "Running Shoes",
        "price": 79.99,
        "category": "Footwear",
        "description": "Enhance your running experience with these comfortable and durable running shoes. Perfect for your active lifestyle.",
        "quantity": 15,
        "colors": ["Beige", "Black", "Red", "Blue"],
        "displayColor": "Black",
        "gender": "Man",
        "brand": "Nike",
        "tags": ["running shoes", "footwear", "Nike"]
    },
    {
        "id": 3,
        "name": "Coffee Maker",
        "price": 89.99,
        "category": "Appliances",
        "discount": 0.05,
        "description": "Start your day with the perfect cup of coffee.",
        "quantity": 0,
        "colors": ["Black", "Silver"],
        "displayColor": "Black",
        "brand": "Bosch",
        "tags": ["coffee maker", "appliances", "Bosh"]
    },
    {
        "id": 4,
        "name": "Laptop",
        "price": 899.99,
        "category": "Electronics",
        "description": "Experience high-performance computing with our advanced laptop.",
        "quantity": 5,
        "colors": ["Silver", "Grey"],
        "displayColor": "Silver",
        "brand": "Apple",
        "tags": ["laptop", "electronics", "Apple"]
    },
    {
        "id": 5,
        "name": "Backpack",
        "price": 49.99,
        "category": "Fashion",
        "discount": 0.2,
        "description": "Carry your essentials in style with our trendy backpack.",
        "quantity": 20,
        "colors": ["Black", "Grey", "Yellow"],
        "displayColor": "Black",
        "gender": "All",
        "brand": "Osprey",
        "tags": ["backpack", "fashion", "Fashionista"]
    },
    {
        "id": 6,
        "name": "Gaming Console",
        "price": 349.99,
        "category": "Electronics",
        "discount": 0.3,
        "description": "Immerse yourself in the world of gaming with our cutting-edge gaming console.",
        "quantity": 17,
        "colors": ["Black"],
        "displayColor": "Black",
        "brand": "Xbox",
        "tags": ["gaming console", "electronics", "Xbox"]
    },
    {
        "id": 7,
        "name": "Hiking Boots",
        "price": 129.99,
        "category": "Footwear",
        "description": "Conquer the trails with our durable and comfortable hiking boots.",
        "quantity": 0,
        "colors": ["Brown", "Black", "Beige"],
        "displayColor": "Black",
        "gender": "Woman",
        "brand": "Timberland",
        "tags": ["hiking boots", "footwear", "Timberland"]
    },
    {
        "id": 8,
        "name": "Blender",
        "price": 59.99,
        "category": "Appliances",
        "discount": 0.1,
        "description": "Create delicious and nutritious blends with our powerful blender.",
        "quantity": 1,
        "colors": ["Black"],
        "displayColor": "Black",
        "brand": "Bosh",
        "tags": ["blender", "appliances", "Bosh"]
    },
    {
        "id": 9,
        "name": "Smartwatch",
        "price": 199.99,
        "category": "Electronics",
        "discount": 0.3,
        "description": "Stay connected and track your fitness with our stylish smartwatch.",
        "quantity": 1,
        "colors": ["Orange", "Black", "Blue", "Red"],
        "displayColor": "Orange",
        "brand": "Apple",
        "tags": ["smartwatch", "electronics", "Apple"]
    },
    {
        "id": 10,
        "name": "Denim Jeans",
        "price": 39.99,
        "category": "Fashion",
        "discount": 0.2,
        "description": "Upgrade your wardrobe with our trendy denim jeans.",
        "quantity": 0,
        "colors": ["Blue", "Black", "Peach"],
        "displayColor": "Blue",
        "gender": "Woman",
        "brand": "American Eagle",
        "tags": ["denim jeans", "fashion", "Fashionista"]
    },
    {
        "id": 11,
        "name": "Wireless Headphones",
        "price": 129.99,
        "category": "Electronics",
        "description": "Immerse yourself in music with our high-quality wireless headphones.",
        "quantity": 10,
        "colors": ["Black", "Blue", "Silver"],
        "displayColor": "Black",
        "brand": "Sony",
        "tags": ["headphones", "electronics", "Sony"]
    },
    {
        "id": 13,
        "name": "Desk Chair",
        "price": 149.99,
        "category": "Furniture",
        "description": "Upgrade your workspace with our ergonomic desk chair for maximum comfort.",
        "quantity": 8,
        "colors": ["Black"],
        "displayColor": "Black",
        "tags": ["desk chair", "furniture"],
        "discount": 0.2,
        "brand": "IKEA"
    },
    {
        "id": 14,
        "name": "Running Jacket",
        "price": 59.99,
        "category": "Sportswear",
        "description": "Stay committed to your fitness goals with adidas running jackets that keep you covered and comfortable, no matter the conditions.",
        "quantity": 0,
        "colors": ["White", "Blue"],
        "displayColor": "White",
        "gender": "Man",
        "brand": "Adidas",
        "discount": 0.5,
        "tags": ["running jacket", "sportswear", "Adidas"],
    },
    {
        "id": 15,
        "name": "Security Camera",
        "price": 149.99,
        "category": "Home Security",
        "description": "Keep your home secure with our advanced smart home security camera.",
        "quantity": 12,
        "colors": ["White", "Black"],
        "displayColor": "White",
        "brand": "Ring",
        "tags": ["security camera", "home security", "Ring"]
    }
]

    productObjects: Product[] = this.products.map(product => {
    return new Product(
      product.id,
      product.name,
      product.price,
      product.category,
      product.colors,
      product.displayColor,
      product.description,
      product.brand,
      product.quantity,
      product.tags,
      product.discount,
      product.gender
    );
  });


  @Input()
  searchValue: string;

  all: number = this.products.length;
  inStock: number = this.productObjects.filter(product => product.IsInStock()).length;
  outOfStock: number = this.productObjects.filter(product => !product.IsInStock()).length;

  filter: string = 'all';

  filterCondition(product: Product): boolean {
   if (this.filter === 'inStock') {
      return product.IsInStock();
    } else if (this.filter === 'outOfStock') {
      return !product.IsInStock();
    }

    return true;
  }

  onFilterChange(value: string) {
    this.filter = value;
  }

  searchCondition(product: Product): boolean {
    if (!this.searchValue) return true;
    return product.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;
  }
}
