import { project } from './../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgClass, NgFor, NgIf, Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
  standalone: true,
})
export class ProjectDetailComponent implements OnInit {
  project!: project;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService,
    private location: Location
  ) {}
  ngOnInit(): void {
    const idProject: number = Number(this.route.snapshot.paramMap.get('id')!);
    if (idProject) {
      this.project = this.projectService.getProjectById(idProject)!;
    }
  }
  goBack() {
    this.location.back();
  }
}
