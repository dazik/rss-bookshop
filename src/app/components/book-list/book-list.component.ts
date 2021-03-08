import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { BookService } from '../../services/book.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @ViewChild('child')
  public child: Element;
  bookservice: any;

  constructor(private bookService: BookService, private cartService: CartService) {

  }

  books:any = this.bookService.getBooks();


  ngOnInit(): void {
  }

  addToCart(book: Book) {
    this.cartService.addBookToCart(book);
  }

}
