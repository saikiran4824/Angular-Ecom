import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }
  apiUrl: string = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}${productId}`);
  }




}
