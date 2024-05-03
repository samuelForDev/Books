import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  redirectToAuthors(): void {
    this.router.navigate(['/authors']);
  }

  redirectToGenre(): void {
    this.router.navigate(['/genres']);
  }

  redirectToBooks(): void {
    this.router.navigate(['/books']);
  }

}
