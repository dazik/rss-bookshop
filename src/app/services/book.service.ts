import { Injectable } from '@angular/core';
import books from '../shared/data/books.js'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getBooks() {
    return books;
  }

  constructor() { }
}
