import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemModule } from '../item/item.module';

import { IncompletedComponent } from './incompleted.component';

@NgModule({
  declarations: [
    IncompletedComponent
  ],
  imports: [
    CommonModule,
    ItemModule
  ],
  exports: [
    IncompletedComponent
  ]
})
export class IncompletedModule { }
