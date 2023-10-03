import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './secommerce/components/pages/home/home.component';
import { ProductsComponent } from './secommerce/components/shared/products/products.component';
import { ProductDetailComponent } from './secommerce/components/shared/product-detail/product-detail.component';
import { HeaderComponent } from './secommerce/components/shared/header/header.component';
import { FooterComponent } from './secommerce/components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
