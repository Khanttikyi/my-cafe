import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HomePageComponent } from "../pages/home/home.component";
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AboutUsComponent } from "../pages/about-us/about-us.component";

const COMPONENTS = [
    NavBarComponent,
    HomePageComponent,
    FooterComponent,
    ProductCardComponent,
    AboutUsComponent,
]
@NgModule({
    declarations: [
        COMPONENTS,
    ],
    exports: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenubarModule,
        BadgeModule,
        ReactiveFormsModule,
        AvatarModule,
        AnimateOnScrollModule,
        ButtonModule,
        CardModule,
        DividerModule,
        CarouselModule,
        TagModule,
        SelectButtonModule,
        SplitterModule
    ],
    providers: []
})
export class ShareComponentModule {
    // @Optional() @SkipSelf() parentModule: CustomerListShareModule
    constructor() {
        // throwIfAlreadyLoaded(parentModule, 'CustomerListShareModule')
    }
}