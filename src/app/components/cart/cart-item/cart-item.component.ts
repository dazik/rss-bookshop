import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from 'src/app/models/book/book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() item: Book;
  @Input() index: number;
  @Output() removeFromCart = new EventEmitter();
  @Output() increaseQuantity = new EventEmitter();
  @Output() decreaseQuantity = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
