import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource
{
  private products: Product[] =
  [
    new Product(1, 'Product 1', 'Brand 1', 'Size 1', 'Short Description 1' , 10),
    new Product(2, 'Product 2', 'Brand 1', 'Size 2', 'Short Description 2' , 10),
    new Product(3, 'Product 3', 'Brand 1', 'Size 3', 'Short Description 3' , 10),
    new Product(4, 'Product 4', 'Brand 1', 'Size 4', 'Short Description 4' , 10),
    new Product(5, 'Product 5', 'Brand 2', 'Size 6', 'Short Description 6' , 10),
    new Product(6, 'Product 6', 'Brand 2', 'Size 6', 'Short Description 6' , 10),
    new Product(7, 'Product 7', 'Brand 2', 'Size 7', 'Short Description 7' , 10),
    new Product(8, 'Product 8', 'Brand 2', 'Size 8', 'Short Description 8' , 10),
    new Product(9, 'Product 9', 'Brand 3', 'Size 9', 'Short Description 9' , 10),
    new Product(10, 'Product 10', 'Brand 3', 'Size 10', 'Short Description 10' , 10),
    new Product(11, 'Product 11', 'Brand 3', 'Size 11', 'Short Description 11' , 10),
    new Product(12, 'Product 12', 'Brand 4', 'Size 12', 'Short Description 12' , 10),
    new Product(13, 'Product 13', 'Brand 4', 'Size 13', 'Short Description 13' , 10),
    new Product(14, 'Product 14', 'Brand 4', 'Size 14', 'Short Description 14' , 10),
    new Product(15, 'Product 15', 'Brand 4', 'Size 15', 'Short Description 15' , 10),
  ];

  getProducts(): Observable<Product[]>
  {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order>
  {
    console.log(JSON.stringify(order));
    return from ([order]);
  }
}
