import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jardin-home-douraid',
  templateUrl: './jardin-home-douraid.component.html',
  styleUrl: './jardin-home-douraid.component.css'
})
export class JardinHomeDouraidComponent {
  constructor(private router: Router) { }

  navigateToList(): void {
    this.router.navigate(['/jardin/list']);
  }

  navigateToInsert(): void {
    this.router.navigate(['/jardin/insert']);
  }
}
