import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ícaro Machado de Carvalho',
  },
  {
    path: 'projects',
    // Lazy loading componente standalone
    loadComponent: () =>
      import('./features/projects/pages/project-page/project-page.component').then(
        (v) => v.ProjectPageComponent,
      ),
    title: 'Mais de detalhes do projeto',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact.component').then(
        (v) => v.ContactComponent,
      ),
    title: 'Entre em contato',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/pages/not-found.component').then(
        (v) => v.NotFoundComponent,
      ),
    title: 'Não encontrado a página volte para home',
  },
];
