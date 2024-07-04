import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { HomeComponent } from './shared/pages/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'simulados', loadChildren: () => import('./simulados/simulados.module').then(m => m.SimuladosModule) },
    { path: '**', component: NotFoundPageComponent}
   ];
