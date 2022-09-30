import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  productsFromParent!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProductsFromServer();
  }

  productsLoaded(data: any) {
    // requestResult => {
    //   // treat result
      console.log('received data', data);
    // }
  }

  loadProductsFromServer() {
    // this.productService.getProducts() => ASYNC OBJECT (Observable)
    const observable = this.productService.getProducts(); 
    // observable.subscribe(callback-function)
    observable.subscribe((requestResult) => this.productsLoaded(requestResult) );
  }

  addProduct(product: Product) {
    console.log('add product from parent', product);
  }

}
