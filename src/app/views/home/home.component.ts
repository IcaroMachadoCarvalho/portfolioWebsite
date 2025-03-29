import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    AboutComponent,
    ProjetosComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
