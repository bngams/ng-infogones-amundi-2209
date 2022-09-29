import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatToolbarModule, 
  MatIconModule
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
