import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { BioComponent } from './bio/bio.component';
import { CodeComponent } from './code/code.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'articles', component: ArticlesComponent},
  {path: 'bio', component: BioComponent},
  {path: 'code', component: CodeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
