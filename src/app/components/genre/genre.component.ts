import {Component, OnInit} from '@angular/core';
import {Genre} from "../../models/genre";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GenreService} from "../../services/genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres: Genre[] = [];
  genreForm: FormGroup;
  constructor(
    private genreService: GenreService,
    private formBuilder: FormBuilder
  ) {
    this.genreForm = this.formBuilder.group({
      genreName: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getAllGenres()
      .subscribe(genres => this.genres = genres);
  }

  createGenres(): void {
    if (this.genreForm.valid) {
      const genreData: Genre = this.genreForm.value;
      this.genreService.createGenre(genreData)
        .subscribe((createdGenre: Genre | null) => {
          if (createdGenre) {
            console.log('Genre created successfully: ', createdGenre);
            this.getGenres();
            this.genreForm.reset();
          }
        });
    } else {
      console.error('Invalid genre form');
    }
  }

}
