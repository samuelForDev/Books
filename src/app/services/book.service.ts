import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environment/environment";
import {Observable} from "rxjs";
import { Books, Book, CreateBook } from "../models/Book"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(environment.api.url);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.api.url}/${id}`);
  }

  createBook(bookData: CreateBook): Observable<Book>{
    return this.http.post<Book>(environment.api.url, bookData);
  }

  updateBook(id: string, bookData: CreateBook): Observable<Book> {
    return this.http.put<Book>(`${environment.api.url}/${id}`, bookData);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.api.url}/${id}`);
  }

}
