import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'projects/:id',
    // Lazy loading componente standalone
    loadComponent: () =>
      import('./views/project-detail/project-detail.component').then(
        (v) => v.ProjectDetailComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./views/forms/forms.component').then((v) => v.FormsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./views/not-found/not-found.component').then(
        (v) => v.NotFoundComponent
      ),
  },
];
