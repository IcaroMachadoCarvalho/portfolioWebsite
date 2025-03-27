import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { AboutComponent } from '../about/about.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [IntroComponent, AboutComponent, ProjetosComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
