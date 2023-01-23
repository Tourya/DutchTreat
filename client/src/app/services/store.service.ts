import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../shared/Product";

@Injectable()
export class Store {

    constructor(private http: HttpClient) {
    }

    public products: Product[] = [];

    loadProducts(): Observable<void> {
        return this.http.get<[]>("/api/products").pipe(map(data => {
            this.products = data;
            return;
        }));
    }
}