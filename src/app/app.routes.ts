import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/home/home.page')
        .then((m) => m.HomePage)
  },
  {
    path: 'vehicle-entry',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './feature/parking/pages/vehicle-entry/vehicle-entry.page'
      ).then((m) => m.VehicleEntryPage)
  },
  {
    path: 'parking-info',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/parking-info/parking-info.page')
        .then((m) => m.ParkingInfoPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];