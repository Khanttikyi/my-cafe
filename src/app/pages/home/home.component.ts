import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';
import coffeeData from '../../../assets/coffee-data.json';
import wineData from '../../../assets/wine-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class HomePageComponent {
  image: any = [
    'cover5',
    'cover4',
    'cover3',
    'cover2',
    'cover1',
  ]


  firstGrid = true;
  secondGrid = false;
  thirdGrid = false;
  products: any;
  wines: any;
  responsiveOptions: any[] | undefined;
  stateOptions: any[] = [{ label: 'COFFEE', value: 'coffee' }, { label: 'WINE', value: 'wine' }];

  value: string = 'coffee';
  isHeaderFixed: boolean = false;

  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    //.scrollTop
    if (document.documentElement.scrollTop > 0) {
      this.isHeaderFixed = true;
    } else {
      this.isHeaderFixed = false;
    }
    if (document.documentElement.scrollTop == 0) {
      this.firstGrid = true
      this.secondGrid = false
      this.thirdGrid = false
    }
    if (document.documentElement.scrollTop > 90) {
      this.firstGrid = true
      // this.secondGrid = false
      // this.thirdGrid = false
    }
    if (document.documentElement.scrollTop > 350) {
      // this.firstGrid = false
      this.secondGrid = true
      // this.thirdGrid = false
    }
    if (document.documentElement.scrollTop > 1100) {
      // this.firstGrid = false
      // this.secondGrid = false
      this.thirdGrid = true
    }
    // //.clientHeight
    // console.log(document.documentElement.clientHeight);
    // //.innerHeight
    // console.log(window.innerHeight);
  }
  constructor(private router: Router) {

  }

  ngOnInit() {

    this.products = coffeeData
    this.wines = wineData

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngAfterViewInit() {

  }
  viewProduct() {
    this.router.navigate(['/products'], {
      queryParams: {
        productType: this.value,
      },
    })
  }
  viewAbout(){
    this.router.navigate(['/about-us'], {
      
    })
  }



}

