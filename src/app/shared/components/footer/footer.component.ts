import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  animations: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  constructor() {}

  getDate() {
    return '@ ' + new Date().getFullYear();
  }
}
