import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = "http://localhost:8084/api/v1/products"

  amount: any = [
    {value: Number.MAX_VALUE, range: "All"},
    {value: 20, range: "Less than $20"},
    {value: 30, range: "Less than $30"},
    {value: 40, range: "Less than $40"},
    {value: 50, range: "Less than $50"},
    {value: 50, range: "Less than $100"}
  ];


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

   getProduct(id: string): Observable<Product> {
     return this.http.get<Product>(this.productUrl + '/' + id);
   }

   createProduct(product: Product) {
     return this.http.post<Product>(this.productUrl, product);
   }

   updateProduct(product: Product) {
     return this.http.put(this.productUrl, product);
   }

   deleteProduct(id: string) {
     return this.http.delete(this.productUrl + '/' + id)
   }

   getAmount() {
     return this.amount;
   }

}
