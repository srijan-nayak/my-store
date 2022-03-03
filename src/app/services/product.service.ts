import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id)),
      first()
    );
  }
}
