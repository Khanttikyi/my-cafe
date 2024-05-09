import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})

export class NavBarComponent implements OnInit {
  isHeaderFixed: boolean = false;
  isSide: boolean = false
  @HostListener("window:scroll", [])
  onWindowScroll() {
    //.scrollTop
    if (document.documentElement.scrollTop > 0) {
      this.isHeaderFixed = true;
    } else {
      this.isHeaderFixed = false;
    }
  }
 
  items: any
  constructor(public router: Router) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Product',
        icon: 'pi pi-list',
        route: 'products'


      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        route: 'about-us'
      },

    ];
  }
  toggleMenu() {
    this.isSide = true
    var sideMenu = document.querySelector('.side-menu') as HTMLElement;
    if (sideMenu) {
      sideMenu.style.left = (sideMenu.style.left === '0px') ? '-250px' : '0px';
    }
  }

  goToRoute(route: any) {
    this.isSide=false
    console.log("route", route);
    if (route == 'coffee' || route == 'wine') {
      this.router.navigate(['/products'], {
        queryParams: {
          productType: route,
        },
      })
    }
    this.router.navigate([route], {})
  }
}
