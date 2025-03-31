import { project } from './../../models/project';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, NgIf, NgFor, NgClass],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  project!: project;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {}
  ngOnInit(): void {
    const idProject: number = Number(this.route.snapshot.paramMap.get('id')!);
    if (idProject) {
      this.project = this.projectService.getProjectById(idProject)!;
    }
    window.scrollTo(0,0);
  }
}
