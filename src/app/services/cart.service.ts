import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: Product[] = [];
    constructor(private http: HttpClient) { }

    public addToCart(product: Product) {
        this.items.push(product);
    }

    public getItems(): Product[] {
        return this.items;
    }

    public clearCart() {
        this.items = [];
        return this.items;
    }

    public getShippingPrices = async (): Promise<any> => await this.http.get('/assets/shipping.json').toPromise();
}