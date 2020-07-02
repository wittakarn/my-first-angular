import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    private items;
    private checkoutForm: FormGroup;
    constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }
    
    onSubmit(customerData) {
        // Process checkout data here
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();

        console.warn('Your order has been submitted', customerData);
    }
}