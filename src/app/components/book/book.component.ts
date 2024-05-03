import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Books, CreateBook} from "../../models/book";
import {Router} from "@angular/router";
import {Author} from "../../models/author";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorService} from "../../services/author.service";
import {Genre} from "../../models/genre";
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  books: Books[] = [];
  bookForm: FormGroup;

  authors: Author[] = [];
  genres: Genre[] = [];

  constructor(
    private bookService: BookService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private genreService: GenreService
  ) {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      pages: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
    this.getGenres();
  }

  getAuthors(): void {
    this.authorService.getAllAuthor()
      .subscribe(authors => this.authors = authors);
  }

  getGenres(): void {
    this.genreService.getAllGenres()
      .subscribe(genres => this.genres = genres);
  }

  getBooks(): void {
    this.bookService.getAllBooks()
      .subscribe(books => this.books = books);
  }

  createBook(): void {
    if (this.bookForm.valid) {
      const bookData: CreateBook = this.bookForm.value;
      this.bookService.createBook(bookData)
        .subscribe((createdBook: CreateBook | null) => {
          if (createdBook) {
            console.log('Genre book successfully: ', createdBook);
            this.getBooks();
            this.bookForm.reset();
          }
        });
    } else {
      console.error('Invalid book form');
    }
  }

}
