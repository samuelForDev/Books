import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = environment.api.url + 'author';
  constructor(private http: HttpClient) { }

  getAllAuthor(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl);
  }

  createAuthor(authorData: Author): Observable<Author> {
    return this.http.post<Author>(this.baseUrl, authorData);
  }

}
