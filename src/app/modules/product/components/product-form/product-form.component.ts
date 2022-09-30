import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup;

  @Output()
  productSubmit = new EventEmitter<Product>();

  // Dependency Injection
  constructor() { }

  // lifecycle hook
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      price: new FormControl('')
    });
  }

  submit(): void {
    console.log('productForm', this.productForm.value);
    const product = this.productForm.value;
    this.productSubmit.emit(product);
  }

}
