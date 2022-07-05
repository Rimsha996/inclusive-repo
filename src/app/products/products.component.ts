import { Component, OnInit } from '@angular/core';
import { Product } from './../dataTypes';
import { ProductService } from './../product-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

//TODo : the home page shows list of all products. If the quantity of product is zero the Add to cart button is disabled
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // cart_items : Product[] = CARTITEMS;
  constructor(private product_service: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.products = this.product_service.getProducts();
  }

  addToCart(element: any) {
    this.products = this.product_service.updateProduct(element);
    this.product_service.addToCart(element);
  }


  openDialog(pro: any): void {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '400px',
      height: '300px',
      data: pro,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
