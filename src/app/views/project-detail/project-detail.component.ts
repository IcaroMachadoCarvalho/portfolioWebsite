import { project } from './../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [],
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
    console.log(this.project);
  }
}
