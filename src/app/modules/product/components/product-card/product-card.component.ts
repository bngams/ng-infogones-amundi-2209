import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product!: Product;
  //product: Product = {} as Product;

  // @ContentChild()
  imageContent!: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('content init', this.imageContent);
  }


}
