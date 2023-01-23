import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable()
export class Store {

    constructor(private http: HttpClient) {
    }

    public products = [];

    loadProducts() {
        return this.http.get<[]>("/api/products").pipe(map(data => this.products = data));
    }
}