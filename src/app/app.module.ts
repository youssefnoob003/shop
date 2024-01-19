import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ProductListComponent } from './products-container/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { NavMenuComponent } from './header/nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { SearchItemComponent } from './products-container/search-item/search-item.component';
import { ProductComponent } from './products-container/product/product.component';
import { FilterComponent } from './products-container/filter/filter.component';
import { ProductDetailsComponent } from './products-container/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    ProductListComponent,
    HeaderComponent,
    LoginComponent,
    SearchBarComponent,
    NavMenuComponent,
    ProductsContainerComponent,
    SearchItemComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
