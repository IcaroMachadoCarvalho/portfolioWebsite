import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { NgIf, NgFor, SlicePipe, UpperCasePipe } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'project-card',
  imports: [NgIf, NgFor, SlicePipe, UpperCasePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: true,
})
export class ProjectCardComponent {
  constructor(private projectService: ProjectsService) {}
  @Input() project: Project = {
    id: 0,
    status: '',
    name: '',
    shortDescription: '',
    longDescription: '',
    imgProject: '',
    urlDeploy: '',
    languages: ['', ''],
    languagesImgs: ['', ''],
  };

  openModal() {
    this.projectService.openModal(this.project);
  }
}
