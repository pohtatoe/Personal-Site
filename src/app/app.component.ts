import { Component } from '@angular/core';
import { NavLink } from './NavLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
