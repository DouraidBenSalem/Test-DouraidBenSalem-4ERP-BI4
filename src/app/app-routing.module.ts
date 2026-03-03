import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JardinHomeDouraidComponent } from './jardin-home-douraid/jardin-home-douraid.component';
import { JardinlistDouraidComponent } from './jardinlist-douraid/jardinlist-douraid.component';
import { JardinInsertDouraidComponent } from './jardin-insert-douraid/jardin-insert-douraid.component';
import { JardinUpdateDouraidComponent } from './jardin-update-douraid/jardin-update-douraid.component';
import { JardinDeleteDouraidComponent } from './jardin-delete-douraid/jardin-delete-douraid.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: JardinHomeDouraidComponent },
  { path: 'jardin/list', component: JardinlistDouraidComponent },
  { path: 'jardin/insert', component: JardinInsertDouraidComponent },
  { path: 'jardin/update/:id', component: JardinUpdateDouraidComponent },
  { path: 'jardin/delete/:id', component: JardinDeleteDouraidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
