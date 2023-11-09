import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'bioshop',
    loadChildren: () => import('./bioshop/bioshop.module').then(m => m.BioshopModule),
  }
];
