import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductStoreComponent } from './product-store/product-store.component';


const routes: Routes = [
 {path: 'home', component: HomeComponent, data: {title: 'Home'}},
 {path: 'product-list', component: ProductStoreComponent, data: { title: 'Product Store'}},
 {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
