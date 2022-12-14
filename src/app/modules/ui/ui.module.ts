import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { RouterModule } from '@angular/router';

const LAYOUT_COMPONENTS = [  
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [
    ...LAYOUT_COMPONENTS
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    RouterModule
  ], 
  exports: [
    MaterialModule, 
    ...LAYOUT_COMPONENTS
  ]
})
export class UIModule { }
