import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chatbot',
    loadComponent: () => import('./componentes/chapgpt/chapgpt.component').then((m) => m.ChapgptComponent),
  },
  {
    path: '',
    redirectTo: 'chatbot',
    pathMatch: 'full',
  }
];
