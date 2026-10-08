import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'EcoSculpt — Landscaping & Gardening Services',
    loadComponent: () => import('./pages/landing/landing-page').then((m) => m.LandingPage),
  },
  { path: '**', redirectTo: '' },
];
