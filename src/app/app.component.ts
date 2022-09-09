import { Component, Inject, Renderer2  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { GlobalsService } from './globals.service';
import { NavLink } from './NavLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  theme:string = 'default';

  constructor(private bottomSheet: MatBottomSheet) {}
  
  openBottomSheet(): void {
    this.bottomSheet.open(ThemeBottomSheet);
  }

  activeLink: NavLink = null;

  // NavLink objects will be used to populate this component's routerLinks, which are nested in the navbar tabs
  // In other words, to change the site's Home Menu links, add new routes here (in addition to within the app-routing.module)
  navLinks: NavLink[] = [
    {path: '/bio', label: 'About Me'},
    {path: '/code', label: 'Code'},
    {path: '/projects', label: 'Projects'},
    // {path: '/articles', label: 'Articles'},
    {path: '/contact', label: 'Contact'},
  ];

}

@Component({
  selector: 'theme-bottom-sheet',
  templateUrl: 'theme-bottom-sheet.html',
})
export class ThemeBottomSheet {
  
  constructor(private bottomSheetRef: MatBottomSheetRef<ThemeBottomSheet>, private globalsService: GlobalsService, @Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) {}

  theme = "default";

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  changeTheme(value: string): void {
    this.renderer.removeClass(this.document.body, this.globalsService.theme);
    this.globalsService.theme = value;
    this.renderer.addClass(this.document.body, value);
  }
}
