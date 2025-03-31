import { ProjectsService } from '../../services/projects.service';
import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { project } from '../../models/project';
import { ProjectComponent } from './project/project.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    NgClass,
    FormsModule,
    NgFor,
    NgIf,
    ProjectComponent,
    SlicePipe,
    RouterLink,
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjectsComponent implements OnInit {
  optionChoosed: string = 'all';
  projects: project[] = [];
  resultQuery!: project[];
  index: number = 3;

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getContentProjects();
    this.filterProjects();
  }

  // Método que lida com a troca de opções e filtro de projetos
  filterProjects(): void {
    switch (this.optionChoosed) {
      case 'all':
        this.resultQuery = this.projects;
        break;

      case 'vanilla':
        this.resultQuery = this.projects.filter((item) => {
          return (
            item.languages.includes('HTML') &&
            item.languages.includes('CSS') &&
            item.languages.includes('Javascript')
          );
        });
        break;

      case 'frameworks':
        this.resultQuery = this.projects.filter((item) => {
          return (
            item.languages.includes('Angular') ||
            item.languages.includes('React') ||
            item.languages.includes('Tailwindcss')
          );
        });
        break;

      case 'others':
        console.log('others');
        this.resultQuery = this.projects.filter((item) => {
          return (
            !item.languages.includes('HTML') &&
            !item.languages.includes('CSS') &&
            !item.languages.includes('Javascript') &&
            !item.languages.includes('Angular') &&
            !item.languages.includes('React') &&
            !item.languages.includes('Tailwind Css')
          );
        });
        break;

      default:
        this.resultQuery = this.projects;
        break;
    }
  }

  // Método que pode ser chamado quando a opção for trocada
  onOptionChange(): void {
    this.index = 3;
    this.filterProjects();
  }

  loadMore() {
    this.index += 3;
  }
}
