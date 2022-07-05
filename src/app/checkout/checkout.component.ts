import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

//ToDo : Empties the cart once customer buys products
export class CheckoutComponent implements OnInit {

  constructor(private products_service: ProductService) { }

  ngOnInit(): void {
    this.products_service.buy();
  }

}
