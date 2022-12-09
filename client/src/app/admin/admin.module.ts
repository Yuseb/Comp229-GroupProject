import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductTableComponent } from './product-table/product-table.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
   children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent, data: {title: 'Edit Product'}, canActivate: [AuthGuard]},
      { path: 'products/:mode', component: ProductEditorComponent, data: {title: 'Add Product'}, canActivate: [AuthGuard]},
      { path: 'products', component: ProductTableComponent, data: {title: 'Product Table'}, canActivate: [AuthGuard]},
      { path: 'orders', component: OrderTableComponent, data: {title: 'Order Table'}, canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'product-list' }]
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent, OrderTableComponent, ProductEditorComponent, ProductTableComponent]
})
export class AdminModule {}
