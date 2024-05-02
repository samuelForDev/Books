import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Books} from "../../models/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  books: Books[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books);
    console.log(this.books);
  }

}
