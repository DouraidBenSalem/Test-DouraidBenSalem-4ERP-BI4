import { Component, OnInit } from '@angular/core';
import { JardinDouraid } from '../Model/jardin-douraid';
import { JardinDouraidService } from '../services/jardin-douraid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jardin-delete-douraid',
  templateUrl: './jardin-delete-douraid.component.html',
  styleUrl: './jardin-delete-douraid.component.css'
})
export class JardinDeleteDouraidComponent implements OnInit {
  jardin: JardinDouraid | undefined;
  jardinId: string = '';

  constructor(
    private jardinService: JardinDouraidService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.jardinId = this.route.snapshot.params['id'];
    this.jardinService.getJardinById(this.jardinId).subscribe({
      next: (response) => {
        if (response.success && response.jardin) {
          this.jardin = {
            id: response.jardin.id.toString(),
            adresse: response.jardin.adresse,
            surface: response.jardin.surface,
            dateEntretien: new Date(response.jardin.dateEntretien),
            status: response.jardin.statut === 1
          };
        } else {
          alert('Jardin non trouvé!');
          this.router.navigate(['/jardin/list']);
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement du jardin:', error);
        alert('Jardin non trouvé!');
        this.router.navigate(['/jardin/list']);
      }
    });
  }

  onConfirmDelete(): void {
    this.jardinService.deleteJardin(this.jardinId).subscribe({
      next: (response) => {
        alert('Jardin supprimé avec succès!');
        this.router.navigate(['/jardin/list']);
      },
      error: (error) => {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression!');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/jardin/list']);
  }
}
