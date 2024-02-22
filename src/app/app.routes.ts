import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/simulados/home', pathMatch: 'full' },
    { path: 'simulados', loadChildren: () => import('./simulados/simulados.module').then(m => m.SimuladosModule) }
   ];
