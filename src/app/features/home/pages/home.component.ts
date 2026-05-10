import { Component } from '@angular/core';
import { IntroComponent } from '../components/intro/intro.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FeaturedProjectsComponent } from '../../projects/components/featured-projects/featured-projects.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    AboutComponent,
    FeaturedProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
