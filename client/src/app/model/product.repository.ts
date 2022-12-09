import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository
{
  private products: Product[] = [];
  private Brands: string[] = [];

  constructor(private dataSource: RestDataSource)
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

  saveProduct(savedProduct: Product): void
  {
    if (savedProduct._id === null || savedProduct._id === 0 || savedProduct._id === undefined)
    {
      this.dataSource.addProduct(savedProduct).subscribe(b => {
        this.products.push(savedProduct);
      });
    }
    else
    {
      this.dataSource.updateProduct(savedProduct).subscribe(product => {
        this.products.splice(this.products.findIndex(b => b._id === savedProduct._id), 1, savedProduct);
      });
    }
  }

  deleteProduct(deletedProductID: number): void
  {
    this.dataSource.deleteProduct(deletedProductID).subscribe(product => {
      this.products.splice(this.products.findIndex(b => b._id === deletedProductID), 1);
    });
  }
}
