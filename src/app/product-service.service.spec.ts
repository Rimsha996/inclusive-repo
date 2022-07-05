import { TestBed } from '@angular/core/testing';
import { CART, PRODUCTS } from 'src/app/mock-test-data';

import { ProductService } from './product-service.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products', () => {
    expect(service.getProducts()).toEqual(PRODUCTS);
  });

  it('should return cart', () => {
    expect(service.getCartItems()).toEqual([]);
  });

  it('should update product', () => {
    let dummy = JSON.parse(JSON.stringify(PRODUCTS));
    let product = { id: 0, product_name: 'Fleece', color: 'Red', category: {id:0,name: 'abc'}, price: 32.00, quantity: 4 };
    let new_product_list = dummy.findIndex((x : any)=> x.id == product.id)
    dummy[new_product_list].quantity -= 1;
    console.log(dummy);
    expect(service.updateProduct(product)).toEqual(dummy);
  });

  it('should add back to product list', () => {
    let dummy = JSON.parse(JSON.stringify(PRODUCTS));
    let product = { id: 0, product_name: 'Fleece', color: 'Red', category: {id:0,name: 'abc'}, price: 32.00, quantity: 4 };
    let new_product_list = dummy.findIndex((x : any)=> x.id == product.id)
    dummy[new_product_list].quantity -= 1;
    expect(service.addBackToProductList(product)).toEqual(PRODUCTS);
  });

  it('should add to cart', () => {
    let product = { id: 0, product_name: 'Fleece', color: 'Red', category: {id:0,name: 'abc'}, price: 32.00, quantity: 4 };
    expect(service.addToCart(product)).toEqual(CART);
  });

  it('apply discount', () => {
    expect(service.applyDiscount('Xefr', 125)).toEqual(5);
  });
});
