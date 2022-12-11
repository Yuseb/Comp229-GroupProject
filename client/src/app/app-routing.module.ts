import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { CartDetailComponent } from './product-store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './product-store/checkout/checkout.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';


const routes: Routes = [
 {path: 'home', component: HomeComponent, data: {title: 'Home'}},
 {path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},

 {path: 'product-list', component: ProductStoreComponent, data: { title: 'Product Store'}},
 {path: 'cart', component: CartDetailComponent, data: { title: 'Shopping Cart'}, canActivate: [StoreFirstGuard]},
 {path: 'checkout', component: CheckoutComponent, data: { title: 'Checkout'}, canActivate: [StoreFirstGuard]},
 {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ StoreFirstGuard]
})
export class AppRoutingModule { }
