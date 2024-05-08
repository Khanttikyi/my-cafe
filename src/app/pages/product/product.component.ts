import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import coffeeData from '../../../assets/coffee-data.json';
import wineData from '../../../assets/wine-data.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productType: any;
  products: any = []
  constructor(private activeRoute: ActivatedRoute) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.activeRoute.queryParams.subscribe((params: any) => {
      
      if (params.productType) {
        this.productType = params.productType
        if (this.productType == 'coffee') {
          this.products = coffeeData
        }
        if (this.productType == 'wine') {
          this.products = wineData
        }
      } else {
        this.productType = 'coffee'
        this.products = coffeeData
      }
    })
  }
}
