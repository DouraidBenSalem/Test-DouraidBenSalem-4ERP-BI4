import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JardinlistDouraidComponent } from './jardinlist-douraid/jardinlist-douraid.component';
import { JardinUpdateDouraidComponent } from './jardin-update-douraid/jardin-update-douraid.component';
import { JardinDeleteDouraidComponent } from './jardin-delete-douraid/jardin-delete-douraid.component';
import { JardinInsertDouraidComponent } from './jardin-insert-douraid/jardin-insert-douraid.component';
import { JardinHomeDouraidComponent } from './jardin-home-douraid/jardin-home-douraid.component';
import { JardinHeaderDouraidComponent } from './jardin-header-douraid/jardin-header-douraid.component';
import { JardinfooterDouraidComponent } from './jardinfooter-douraid/jardinfooter-douraid.component';

@NgModule({
  declarations: [
    AppComponent,
    JardinlistDouraidComponent,
    JardinUpdateDouraidComponent,
    JardinDeleteDouraidComponent,
    JardinInsertDouraidComponent,
    JardinHomeDouraidComponent,
    JardinHeaderDouraidComponent,
    JardinfooterDouraidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
