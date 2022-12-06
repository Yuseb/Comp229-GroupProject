import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ProductStoreComponent } from '../product-store/product-store.component';
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ProductStoreComponent, CounterDirective],
  exports: [ProductStoreComponent, CounterDirective]
})
export class ProductStoreModule {}
