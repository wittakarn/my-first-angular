import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/products';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    private product;

    constructor(private route: ActivatedRoute,
        private cartService: CartService) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.product = products[params.get('productId')];
        });
    }

    addToCart(product) {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
    }
}