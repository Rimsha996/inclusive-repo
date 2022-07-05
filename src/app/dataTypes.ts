export interface Product {
    id: number;
    product_name: string;
    color: string;
    category: Category;
    price: number;
    quantity: number;
  }
  
export interface Category {
    id: number,
    name: string
}