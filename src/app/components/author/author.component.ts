import {Component, OnInit} from '@angular/core';
import {Author} from "../../models/author";
import {AuthorService} from "../../services/author.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Author[] = [];
  authorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.authorForm = this.formBuilder.group({
      authorName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAuthors();
  }

  redirectToBooks(): void {
    this.router.navigate(['/books'])
  }

  getAuthors(): void {
    this.authorService.getAllAuthor()
      .subscribe(authors => this.authors = authors);
  }

  createAuthor(): void {
    if (this.authorForm.valid) {
      const authorData: Author = this.authorForm.value;
      this.authorService.createAuthor(authorData)
        .subscribe((createdAuthor: Author | null) => {
          if (createdAuthor) {
            console.log('Author created successfully:', createdAuthor);
            this.getAuthors();
            this.authorForm.reset();
          }
        });
    } else {
      console.error('Invalid author form');
    }
  }

}
