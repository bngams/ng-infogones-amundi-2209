import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../ui/ui.module';

@NgModule({
  exports: [
    UIModule,
    FormsModule, // template driven forms
    ReactiveFormsModule // reactive forms
  ]
})
export class SharedModule { }
