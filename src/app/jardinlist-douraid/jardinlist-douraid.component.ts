import { Component, OnInit } from '@angular/core';
import { JardinDouraid } from '../Model/jardin-douraid';
import { JardinDouraidService } from '../services/jardin-douraid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jardinlist-douraid',
  templateUrl: './jardinlist-douraid.component.html',
  styleUrl: './jardinlist-douraid.component.css'
})
export class JardinlistDouraidComponent implements OnInit {
  jardins: JardinDouraid[] = [];

  constructor(
    private jardinService: JardinDouraidService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadJardins();
  }

  loadJardins(): void {
    this.jardinService.getAllJardins().subscribe({
      next: (data) => {
        this.jardins = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des jardins:', error);
        alert('Erreur lors du chargement des jardins');
      }
    });
  }

  navigateToInsert(): void {
    this.router.navigate(['/jardin/insert']);
  }

  navigateToUpdate(id: string): void {
    this.router.navigate(['/jardin/update', id]);
  }

  navigateToDelete(id: string): void {
    this.router.navigate(['/jardin/delete', id]);
  }
}
