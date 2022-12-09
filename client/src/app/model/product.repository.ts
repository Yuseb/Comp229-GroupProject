import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository
{
  private products: Product[] = [];
  private Brands: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.Brands = data.map(b => b.Brand)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getProducts(Brand: string = null): Product[]
  {
    return this.products
      .filter(b => Brand == null || Brand === b.Brand);
  }

  getProduct(id: number): Product
  {
    return this.products.find(b => b._id === id);
  }

  getBrands(): string[]
  {
    return this.Brands;
  }
}
