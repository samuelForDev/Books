import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environment/environment";
import {Observable} from "rxjs";
import { Books, Book, CreateBook } from "../models/book"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.api.url + 'book';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.baseUrl);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  createBook(bookData: CreateBook): Observable<Book>{
    return this.http.post<Book>(this.baseUrl, bookData);
  }

  updateBook(id: string, bookData: CreateBook): Observable<Book> {
    return this.http.put<Book>(`${this.baseUrl}/${id}`, bookData);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
