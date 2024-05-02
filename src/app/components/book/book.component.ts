import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Books} from "../../models/book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  books: Books[] = [];
  constructor(
    private bookService: BookService,
    private router: Router) {}

  ngOnInit(): void {
    this.getBooks();
  }

  redirectToAuthors(): void {
    this.router.navigate(['/authors']);
  }

  redirectToGenre(): void {
    this.router.navigate(['/genres']);
  }

  getBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books);
    console.log(this.books);
  }

}
