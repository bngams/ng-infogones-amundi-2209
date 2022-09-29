import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [
    { id: 1, name: 'Produit 1', price: 10, imgUrl: "", desc: ""},
    { id: 1, name: 'Produit 2', price: 20, imgUrl: "", desc: ""}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
