import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemModule } from '../item/item.module';

import { CompletedComponent } from './completed.component';

@NgModule({
  declarations: [
    CompletedComponent
  ],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [
    CompletedComponent
  ]
})
export class CompletedModule { }
