import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatListModule, MatTabsModule, MatExpansionModule, MatIconModule, MatIconRegistry, MatCardModule, MatBottomSheetModule, MatRadioModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent, ThemeBottomSheet } from './app.component';
import { BioComponent } from './bio/bio.component';
import { CodeComponent } from './code/code.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GlobalsService } from './globals.service';

@NgModule({
  declarations: [
    AppComponent,
    ThemeBottomSheet,
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
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatBottomSheetModule,
    MatRadioModule
  ],
  entryComponents: [AppComponent, ThemeBottomSheet],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Register font-awesome to use with Angular Material's <mat-icon>
  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    matIconRegistry.addSvgIcon(
      'color-palette',
      sanitizer.bypassSecurityTrustResourceUrl('assets/palette-icon.svg'));
  }
}
