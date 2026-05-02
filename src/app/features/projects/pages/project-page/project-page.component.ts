import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';
import { NgFor, NgForOf } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-page',
  imports: [NgFor, NgForOf, ProjectCardComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  projects: Project[] = [];
  constructor(private projectService: ProjectsService) {}
  ngOnInit(): void {
    this.projects = this.projectService.getContentProjects();
  }
  goBack(): void {
    window.history.back();
  }
}
