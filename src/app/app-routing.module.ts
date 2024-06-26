import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./components/book/book.component";
import {AuthorComponent} from "./components/author/author.component";
import {GenreComponent} from "./components/genre/genre.component";

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'authors', component: AuthorComponent },
  { path: 'genres', component: GenreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
