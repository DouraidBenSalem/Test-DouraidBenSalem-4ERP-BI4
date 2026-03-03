import { Component, OnInit } from '@angular/core';
import { JardinDouraid } from '../Model/jardin-douraid';
import { JardinDouraidService } from '../services/jardin-douraid.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jardin-update-douraid',
  templateUrl: './jardin-update-douraid.component.html',
  styleUrl: './jardin-update-douraid.component.css'
})
export class JardinUpdateDouraidComponent implements OnInit {
  jardin: JardinDouraid = {
    id: '',
    adresse: '',
    surface: 50,
    dateEntretien: new Date(),
    status: true
  };
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

  onSubmit(): void {
    this.jardinService.updateJardin(this.jardinId, this.jardin).subscribe({
      next: (response) => {
        alert('Jardin modifié avec succès!');
        this.router.navigate(['/jardin/list']);
      },
      error: (error) => {
        console.error('Erreur lors de la modification:', error);
        alert('Erreur lors de la modification!');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/jardin/list']);
  }
}
