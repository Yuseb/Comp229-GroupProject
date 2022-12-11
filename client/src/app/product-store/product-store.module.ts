import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ProductStoreComponent } from '../product-store/product-store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [ProductStoreComponent, CounterDirective, CartDetailComponent, CheckoutComponent],
  exports: [ProductStoreComponent, CounterDirective, CartDetailComponent, CheckoutComponent]
})
export class ProductStoreModule {}
