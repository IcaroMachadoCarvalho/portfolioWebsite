import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Project } from '../../models/project.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-detail',
  imports: [NgIf, NgFor, UpperCasePipe, AsyncPipe],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('200ms ease', style({ opacity: 0 }))]),
    ]),
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  isOpen$: Observable<boolean>;
  selectedProject$: Observable<Project | null>;
  constructor(public projectService: ProjectsService) {
    this.isOpen$ = this.projectService.isOpen$;
    this.selectedProject$ = this.projectService.selectedProject$;
  }

  closeModal() {
    this.projectService.closeModal();
  }
}
