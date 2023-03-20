import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { QuantityComponent } from './quantity/quantity.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { products } from './Products.service';
import { quantity } from './quantity.service';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ProductComponent,
    ProductsComponent,
    CheckoutComponent,
    HomeComponent,
    MyOrdersComponent,
    QuantityComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    products,
    quantity
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
