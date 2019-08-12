import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTabsModule, MatExpansionModule, MatIconModule, MatIconRegistry, MatCardModule } from '@angular/material';

import { AppComponent } from '@src/app/app.component';
import { BioComponent } from '@src/app/bio/bio.component';
import { CodeComponent } from '@src/app/code/code.component';
import { ProjectsComponent } from '@src/app/projects/projects.component';
import { ArticlesComponent } from '@src/app/articles/articles.component';
import { ContactComponent } from '@src/app/contact/contact.component';
import { HomeComponent } from '@src/app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    CodeComponent,
    ProjectsComponent,
    ArticlesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Register font-awesome to use with Angular Material's <mat-icon>
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
