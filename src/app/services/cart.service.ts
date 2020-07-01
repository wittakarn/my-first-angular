import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items = [];
    constructor() { }

    public addToCart(product) {
        this.items.push(product);
    }

    public getItems() {
        return this.items;
    }

    public clearCart() {
        this.items = [];
        return this.items;
    }
}