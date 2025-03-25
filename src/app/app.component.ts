import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'portfolio';
}
