import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ShareComponentModule } from '../../share-component/share-component.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ShareComponentModule
  ]
})
export class ProductModule { }
