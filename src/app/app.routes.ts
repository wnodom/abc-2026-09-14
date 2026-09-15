import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about'),
  },
  {
    path: 'help',
    loadComponent: () => import('./help/help'),
  },
];
