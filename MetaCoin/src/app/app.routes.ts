import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent)
  },

  {
    path: 'token-info-page',
    loadComponent: () => import('./pages/token-info-page/token-info-page.component').then(m => m.TokenInfoPageComponent)
  },
  {
    path: 'markets-page',
    loadComponent: () => import('./pages/markets-page/markets-page.component').then(m => m.MarketsPageComponent)
  },
  {
    path: 'login-page',
    loadComponent: () => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'final-page',
    loadComponent: () => import('./pages/final-page/final-page.component').then(m => m.FinalPageComponent)
  },
  //Страница битой ссылки
  {
    path: '**',
    loadComponent: () => import('./pages/page-404/page-404.component').then(m => m.Page404Component)
  }
];


