import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Book } from '../../models/book/book'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cart: Book[] = [];

  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.cart = this.cartService.getItems();
    this.totalPrice = this.cartService.totalPrice;
  }

  removeFromCart(index) {
    this.cartService.removeBookFromCart(index);
  }

  increaseQuantity(index) {
    console.log(index);
    this.cartService.increaseQuantity(index);

  }

  decreaseQuantity(index) {
    this.cartService.decreaseQuantity(index);
  }

}
