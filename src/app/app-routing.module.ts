import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard]},
 
      {path: 'checkout', component: CheckoutComponent,canActivate: [AuthGuard]},
      {path: 'products', component: ProductComponent,canActivate: [AuthGuard]},
      {path: 'my-orders', component: MyOrdersComponent,canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
