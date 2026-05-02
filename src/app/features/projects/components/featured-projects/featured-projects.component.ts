import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgFor, NgForOf } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-featured-projects',
  imports: [NgFor, NgForOf, ProjectCardComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  isVisible: boolean = false;
  offset: number = 100;
  projects: Project[] = [];
  @ViewChild('featuredProjectsElement') elemento!: ElementRef;
  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getFeaturedProjects();
  }
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
