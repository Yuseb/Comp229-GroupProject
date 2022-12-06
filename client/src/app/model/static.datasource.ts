import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private products: Product[] =
  [
    new Product(1, 'Product 1', 'Author 1', 'Year 1', 'Short Description 1' , 10),
    new Product(2, 'Product 2', 'Author 1', 'Year 2', 'Short Description 2' , 10),
    new Product(3, 'Product 3', 'Author 1', 'Year 3', 'Short Description 3' , 10),
    new Product(4, 'Product 4', 'Author 1', 'Year 4', 'Short Description 4' , 10),
    new Product(5, 'Product 5', 'Author 2', 'Year 6', 'Short Description 6' , 10),
    new Product(6, 'Product 6', 'Author 2', 'Year 6', 'Short Description 6' , 10),
    new Product(7, 'Product 7', 'Author 2', 'Year 7', 'Short Description 7' , 10),
    new Product(8, 'Product 8', 'Author 2', 'Year 8', 'Short Description 8' , 10),
    new Product(9, 'Product 9', 'Author 3', 'Year 9', 'Short Description 9' , 10),
    new Product(10, 'Product 10', 'Author 3', 'Year 10', 'Short Description 10' , 10),
    new Product(11, 'Product 11', 'Author 3', 'Year 11', 'Short Description 11' , 10),
    new Product(12, 'Product 12', 'Author 4', 'Year 12', 'Short Description 12' , 10),
    new Product(13, 'Product 13', 'Author 4', 'Year 13', 'Short Description 13' , 10),
    new Product(14, 'Product 14', 'Author 4', 'Year 14', 'Short Description 14' , 10),
    new Product(15, 'Product 15', 'Author 4', 'Year 15', 'Short Description 15' , 10),
  ];

  getProducts(): Observable<Product[]>
  {
    return from([this.products]);
  }
}
