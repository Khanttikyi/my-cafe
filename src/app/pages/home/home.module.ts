import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShareComponentModule } from '../../share-component/share-component.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareComponentModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
