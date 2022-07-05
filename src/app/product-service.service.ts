import { Injectable } from '@angular/core';
import { Product, Category } from './dataTypes';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private CATEGORY: Category[] = [
    { id: 0, name: 'Womens hiking' },
    { id: 1, name: 'Mens hiking' },
    { id: 2, name: 'Womens running' },
    { id: 3, name: 'Mens running' },
    { id: 4, name: 'Womens cycling' },
    { id: 5, name: 'Mens cycling' },
  ]
  private PRODUCTS: Product[] = [
    { id: 0, product_name: 'Fleece', color: 'Red', category: this.CATEGORY['0'], price: 32.00, quantity: 4 },
    { id: 1, product_name: 'Boots', color: 'Brown', category: this.CATEGORY['0'], price: 99.00, quantity: 10 },
    { id: 2, product_name: 'Fleece', color: 'Green', category: this.CATEGORY['1'], price: 34.00, quantity: 6 },
    { id: 3, product_name: 'Boots', color: 'Black', category: this.CATEGORY['1'], price: 99.00, quantity: 9 },
    { id: 4, product_name: 'Vest', color: 'Yellow', category: this.CATEGORY['2'], price: 26.0, quantity: 4 },
    { id: 5, product_name: 'Jacket', color: 'Black', category: this.CATEGORY['2'], price: 75.00, quantity: 2 },
    { id: 6, product_name: 'T-shirt', color: 'Yellow', category: this.CATEGORY['3'], price: 19.99, quantity: 4 },
    { id: 7, product_name: 'Jacket', color: 'Grey', category: this.CATEGORY['3'], price: 86.00, quantity: 0 },
    { id: 8, product_name: 'Jacket', color: 'Orange', category: this.CATEGORY['4'], price: 24.50, quantity: 4 },
    { id: 9, product_name: 'Bib-tights', color: 'Grey', category: this.CATEGORY['4'], price: 40.00, quantity: 9 },
    { id: 10, product_name: 'Bib-shorts', color: 'Black', category: this.CATEGORY['4'], price: 30.00, quantity: 2 },
    { id: 11, product_name: 'Jacket', color: 'Green', category: this.CATEGORY['5'], price: 55.00, quantity: 1 },
    { id: 12, product_name: 'Bib-tights', color: 'Black', category: this.CATEGORY['5'], price: 65.00, quantity: 5 },
  ];

  private CART: Product[] = [];

  private vouchers = [
    { code: 'Xefr', valid: true, category: 5 }, // 5 off your order 
    { code: 'Fhgy', valid: true, category: 10 }, // 10.00 off when you spend over £50.00
    { code: 'FgrY', valid: true, category: 15 }, // 15.00 off when you have bought at least one cycling item and spent over £75.00
  ]

  constructor() { }
//ToDo: return products list
  getProducts() {
    // uses an observable to get data from BE
    return this.PRODUCTS;
  }
//ToDo: return items in cart
  getCartItems() {
    return this.CART;
  }
//ToDo: reduce quantity from product when product is added to cart
  updateProduct(element: Product) {
    let product = this.PRODUCTS.findIndex(x => x.id == element.id);
    (product > -1) && (this.PRODUCTS[product]['quantity'] = this.PRODUCTS[product]['quantity'] - 1);
    return this.PRODUCTS;
  }
//ToDo: Increases product quantity in product list when product is removed from cart
  addBackToProductList(element: Product) {
    let product = this.PRODUCTS.findIndex(x => x.id == element.id);
    product && (this.PRODUCTS[product]['quantity'] = (this.PRODUCTS[product]['quantity'] += 1));
    return this.PRODUCTS;
  }
//ToDo: Only allows to increase items in cart if product is available
  addToCart(element: Product) {
    let index = this.CART.findIndex(x => x.id == element.id);
    let product_index = this.PRODUCTS.findIndex(x => x.id == element.id)
    if (this.PRODUCTS[product_index].quantity > 0) {
      if (index > -1) {
        this.CART[index].quantity += 1;
        this.PRODUCTS[product_index].quantity -= 1;
      } else {
        this.CART.push({ ...element, quantity: 1 });
      }
    } else {
      alert('Sorry no more product is available in stock');
    }

    return this.CART;
  }
// ToDo: Decreases quantity when an item is removed from cart
  reduceQuantityFromCart(element: Product) {
    let index = this.CART.findIndex(x => x.id == element.id);
    if (this.CART[index].quantity <= 1) {
      this.CART.splice(index, 1);
    } else if (this.CART[index].quantity > 1) {
      this.CART[index].quantity -= 1;
    }
    return this.CART;
  }

  applyDiscount(code: any, total: number) {
    let index = this.vouchers.findIndex(x => x.code == code);
    let cart_index = this.CART.findIndex(x => x.category.id == 4 || x.category.id == 5)
    if (index > -1 && this.vouchers[index].valid == true) {
      if (this.vouchers[index].category == 5) {
        return 5;
      } else if (this.vouchers[index].category == 10 && total > 50) {
        return 10;
      } else if (this.vouchers[index].category == 15 && total > 50 && cart_index > -1) {
        return 15;
      } else {
        alert('Invalid voucher code');
        return 0
      }
    } else {
      alert('Invalid voucher code');
      return 0
    }
  }

  //ToDo: Once a voucher is used it is set to invalid
  setVoucherToInvalid(voucher:any){
    let index = this.vouchers.findIndex(x => x.code == voucher)
    this.vouchers[index].valid = false;
  }

  buy(){
    this.CART = [];
  }
}
