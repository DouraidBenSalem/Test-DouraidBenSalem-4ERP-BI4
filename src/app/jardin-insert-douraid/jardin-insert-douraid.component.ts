import { Component } from '@angular/core';
import { JardinDouraid } from '../Model/jardin-douraid';
import { JardinDouraidService } from '../services/jardin-douraid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jardin-insert-douraid',
  templateUrl: './jardin-insert-douraid.component.html',
  styleUrl: './jardin-insert-douraid.component.css'
})
export class JardinInsertDouraidComponent {
  jardin: JardinDouraid = {
    id: '',
    adresse: '',
    surface: 50,
    dateEntretien: new Date(),
    status: true
  };

  constructor(
    private jardinService: JardinDouraidService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.jardinService.addJardin(this.jardin).subscribe({
      next: (response) => {
        alert('Jardin ajouté avec succès!');
        this.router.navigate(['/jardin/list']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du jardin:', error);
        alert('Erreur lors de l\'ajout du jardin');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/jardin/list']);
  }
}
