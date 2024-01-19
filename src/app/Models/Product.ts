export class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    discount?: number;
    colors: string[];
    displayColor: string;
    description: string;
    gender?: string;
    brand: string;
    quantity: number;
    tags: string[];
  
    constructor(
      id: number,
      name: string,
      price: number,
      category: string,
      colors: string[],
      displayColor: string,
      description: string,
      brand: string,
      quantity: number,
      tags: string[],
      discount?: number,
      gender?: string
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
      this.discount = discount;
      this.colors = colors;
      this.displayColor = displayColor;
      this.description = description;
      this.gender = gender;
      this.brand = brand;
      this.quantity = quantity;
      this.tags = tags;
    }
  
    getImageUrl(color: string = this.displayColor): string {
        return `../../assets/products/${this.name.replace(' ', '')}/${color}.png`;
      }
    
    IsInStock(): boolean {
    return this.quantity > 0;
    }
}
  