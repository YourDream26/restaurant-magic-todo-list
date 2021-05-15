import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import {
  FormModule,
  CompletedModule,
  IncompletedModule
} from '../../components/';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    CompletedModule,
    IncompletedModule
  ]
})
export class MainModule { }
