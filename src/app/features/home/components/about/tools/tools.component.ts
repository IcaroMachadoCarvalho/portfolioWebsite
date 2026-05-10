import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  NgSwitch,
  NgSwitchCase,
  NgFor,
  NgSwitchDefault,
} from '@angular/common';

interface skillGroup {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-tools',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  isVisible: boolean = false;
  offset: number = 140;
  skillsArray: skillGroup[] = [
    {
      title: 'Frontend',
      icon: 'frontend',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5 / CSS3',
        'SASS / SCSS',
        'Tailwind CSS',
        'Angular Material',
      ],
    },
    {
      title: 'Backend',
      icon: 'backend',
      items: [
        'Java',
        'Spring Boot',
        'Node.js',
        'Express',
        'Python',
        'MongoDB',
        'MySQL',
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: 'devops',
      items: ['Docker', 'Docker Compose'],
    },
    {
      title: 'Ferramentas & CMS',
      icon: 'tools',
      items: ['WordPress', 'Git / GitHub', 'Figma', 'Elementor', 'JWT / Auth'],
    },
  ];

  @ViewChild('toolsElement') elemento!: ElementRef;

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
