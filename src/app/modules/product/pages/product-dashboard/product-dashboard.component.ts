import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Produit 1', price: 10, imgUrl: "", desc: "", category: ""},
    { id: 1, name: 'Produit 2', price: 20, imgUrl: "", desc: "", category: ""}
  ]

  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  productSubmit(product: Product): void {
    console.log('received product', product);
    this.products.push(product);

    this.productListComponent.addProduct(product);
  }

}
