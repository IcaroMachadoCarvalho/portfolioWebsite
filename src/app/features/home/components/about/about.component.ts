import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolsComponent } from './tools/tools.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@Component({
  selector: 'app-about',
  imports: [FormsModule, ExperiencesComponent, ToolsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',

  standalone: true,
})
export class AboutComponent {
  isVisible: boolean = false;
  offset: number = 100;

  @ViewChild('aboutElement') elemento!: ElementRef;

  constructor() {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.detectScroll();
  }

  detectScroll(): void {
    if (this.isVisible) return;

    const rect = this.elemento.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight - this.offset) {
      this.isVisible = true;
    }
  }
}
