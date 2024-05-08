import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareComponentModule } from './share-component/share-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './pages/product/product.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ShareComponentModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
