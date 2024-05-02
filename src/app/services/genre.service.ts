import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../models/genre";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  baseUrl = environment.api.url + 'genre';
  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.baseUrl);
  }

  createGenre(genreData: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.baseUrl, genreData);
  }

}
