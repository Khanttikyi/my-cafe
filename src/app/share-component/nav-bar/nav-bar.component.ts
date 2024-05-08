import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent implements OnInit {
  items:any
  constructor(public router: Router) {}
  ngOnInit() {
    this.items = [
      {
          label: 'Product',
          icon: 'pi pi-list',
          route:'products'
          // items: [
          //     {
          //         label: 'Installation',
          //         route: '/installation'
          //     },
          //     {
          //         label: 'Configuration',
          //         route: '/configuration'
          //     }
          // ]
          
      },
      {
          label: 'About',
          icon: 'pi pi-info-circle',
          route:'about-us'
      },
     
  ];
  }
}
