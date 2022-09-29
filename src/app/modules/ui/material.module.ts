import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

const MATERIAL_MODULES = [
  MatToolbarModule, 
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule
];


@NgModule({
  // private / intern for the module (used inside the module) 
  // declarations: [],
  // imports: [
  //   ...MATERIAL_MODULES
  // ],

  // public / export (used outside the module)
  exports: [    
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
