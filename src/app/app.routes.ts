import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/simulados', pathMatch: 'full' },
    { path: 'simulados', loadChildren: () => import('./simulados/simulados.module').then(m => m.SimuladosModule) },
    { path: '**', component: NotFoundPageComponent}
   ];
