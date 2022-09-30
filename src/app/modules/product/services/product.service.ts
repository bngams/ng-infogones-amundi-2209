import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

interface APIProducts {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // <portee> <nom attribut>: <type>
  constructor(private http: HttpClient) {
    // this.http = http (done by typescript)
  }

  getProducts(): Observable<APIProducts> {
    return this.http.get<APIProducts>(`${environment.apiUrl}/products`);
  }
}
