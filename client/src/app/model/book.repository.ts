import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository
{
  private products: Product[] = [];
  private authors: string[] = [];

  constructor(private dataSource: StaticDataSource)
  {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.authors = data.map(b => b.author)
        .filter((a, index, array) => array.indexOf(a) === index).sort();
    });
  }

  getProducts(author: string = null): Product[]
  {
    return this.products
      .filter(b => author == null || author === b.author);
  }

  getProduct(id: number): Product
  {
    return this.products.find(b => b._id === id);
  }

  getAuthors(): string[]
  {
    return this.authors;
  }
}
