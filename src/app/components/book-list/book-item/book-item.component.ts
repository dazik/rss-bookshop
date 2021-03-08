import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from 'src/app/models/book/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent implements OnInit {
  @Input() book:Book;
  @Output() addBook = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(book: Book) : void {
    this.addBook.emit(book);
  }
}
