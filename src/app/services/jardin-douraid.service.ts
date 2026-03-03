import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JardinDouraid } from '../Model/jardin-douraid';

@Injectable({
  providedIn: 'root'
})
export class JardinDouraidService {
  private apiUrl = 'http://localhost:3000/jardins';

  constructor(private http: HttpClient) { }

  // Read all jardins
  getAllJardins(): Observable<JardinDouraid[]> {
    return this.http.get<JardinDouraid[]>(this.apiUrl);
  }

  // Read one jardin by id
  getJardinById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create
  addJardin(jardin: JardinDouraid): Observable<any> {
    const jardinData = {
      adresse: jardin.adresse,
      surface: jardin.surface,
      dateEntretien: jardin.dateEntretien,
      statut: jardin.status
    };
    return this.http.post<any>(this.apiUrl, jardinData);
  }

  // Update
  updateJardin(id: string, updatedJardin: JardinDouraid): Observable<any> {
    const jardinData = {
      adresse: updatedJardin.adresse,
      surface: updatedJardin.surface,
      dateEntretien: updatedJardin.dateEntretien,
      statut: updatedJardin.status
    };
    return this.http.put<any>(`${this.apiUrl}/${id}`, jardinData);
  }

  // Delete
  deleteJardin(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
