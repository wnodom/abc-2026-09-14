import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard'),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about'),
  },
  {
    path: 'help',
    loadComponent: () => import('./help/help'),
  },
];
