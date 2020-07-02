import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Shipping } from '../interface/shipping';

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
    shippingCosts: Shipping;

    constructor(private cartService: CartService) { }

    async ngOnInit() {
        this.shippingCosts = await this.cartService.getShippingPrices();
    }

}