import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Ícaro Machado de Carvalho"
  },
  {
    path: 'projects/:id',
    // Lazy loading componente standalone
    loadComponent: () =>
      import('./pages/project-detail/project-detail.component').then(
        (v) => v.ProjectDetailComponent
      ),
      title: 'Mais de detalhes do projeto'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/forms/forms.component').then((v) => v.FormsComponent),
    title: "Entre em contato"
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (v) => v.NotFoundComponent
      ),
      title: "Não encontrado a página volte para home"
  },
];
