import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from '../dataTypes';
import { ProductService } from './../product-service.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
//  the shopping cart shows the list of products added and there quantities and sub prices as well as total price
//  Only one voucher can be applied at a time and once it is used user wont be able to use it again.
export class ShoppingCartComponent implements OnInit {
  @ViewChild('cart_table') cart_table: MatTable<any[]> | undefined;
  cart_items: Product[] = [];
  cart_total = 0;
  form: FormGroup;
  constructor(private products_service: ProductService, private form_builder: FormBuilder, public router: Router) { 
    this.form =  this.form_builder.group({
      products: [[]],
      total: [0],
      discountedTotal: [0],
      voucher: [null]
    });
  }

  ngOnInit(): void {
    this.cart_items = this.products_service.getCartItems()
  }

  removeFromCart(element: any) {
    this.cart_items = this.products_service.reduceQuantityFromCart(element);
    this.products_service.addBackToProductList(element);
    this.cart_table?.renderRows()
  }

  cartTotal() {
    this.cart_total = 0;
    this.cart_items.forEach(ele => {
      this.cart_total += (ele.quantity * ele.price)
    })
    return this.cart_total
  }

  addToCart(element: Product) {
    this.cart_items = this.products_service.addToCart(element);
  }

  applyVoucher(){
   this.form.get('discountedTotal')?.setValue(this.cart_total - this.products_service.applyDiscount( this.form.get('voucher')?.value , this.cart_total ));
  }
  submit() {
    this.form.patchValue({products : this.cart_items});
    this.form.get('voucher')?.value && this.applyVoucher();
    this.form.get('voucher')?.value && this.products_service.setVoucherToInvalid(this.form.get('voucher')?.value);
    this.router.navigate(['checkout']);
   }
}
