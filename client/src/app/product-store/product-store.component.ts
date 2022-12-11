import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent
{
  public selectedBrand = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) { }


  get products(): Product[]
  {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedBrand)
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get Brands(): string[]
  {
    return this.repository.getBrands();
  }

  changeBrand(newBrand?: string): void
  {
    this.selectedBrand = newBrand;
  }

  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getProducts(this.selectedBrand).length / this.productsPerPage);
  }

  addProductToCart(product: Product): void
  {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}
