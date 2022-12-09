import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  templateUrl: './product-table.component.html'
})
export class ProductTableComponent implements OnInit {

  constructor(private repository: ProductRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getProducts(): Product[]
  {
    return this.repository.getProducts();
  }

  deleteProduct(id: number): void
  {
    if (confirm('Are you sure?') && (id !== undefined))
    {
      this.repository.deleteProduct(id);
    }
    else
    {
      window.location.reload(); // refresh fix
      this.router.navigateByUrl('/admin/main/products');
    }
  }

  addProduct(): void
  {
    this.router.navigateByUrl('/admin/main/products/add');
  }

  editProduct(id: number): void
  {
    this.router.navigateByUrl('/admin/main/products/edit/' + id);
  }

}
