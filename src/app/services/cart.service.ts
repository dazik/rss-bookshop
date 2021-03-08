import { Injectable } from '@angular/core';
import { Book } from '../models/book/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Book[] = [];
  totalQuantity:number = 0;
  totalPrice:number = 0;
  constructor() { }

  getItems() {
    return this.cart;
  }

  addBookToCart(book: Book) : Book[] {
    if (this.cart.indexOf(book) !== -1) {
      alert('You have this book in your cart')
    } else {
      this.cart.push(book);
      this.cart[this.cart.length - 1].quantity = 1;
    }
    console.log(this.cart);
    return this.cart;
  }

  removeBookFromCart(index: number) : Book[] {
    this.cart.splice(index, 1);
    return this.cart;
  }

  emptyCart() : Book[] {
    this.cart = [];
    return this.cart;
  }

  increaseQuantity(index: number) : Book[] {
    this.cart[index].quantity += 1;
    return this.cart;
  }

  decreaseQuantity(index: number) : Book[] {
    if (this.cart[index].quantity < 2) {
      this.removeBookFromCart(index);
    } else {
      this.cart[index].quantity -= 1;
      return this.cart;
    }
  }

  updateCartData() {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    this.cart.forEach(item => {
      this.totalQuantity += item.quantity;
      this.totalPrice += item.price * item.quantity;
    });
  }
}
