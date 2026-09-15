import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found'),
  },
  { path: '**', redirectTo: 'not-found' },
];
