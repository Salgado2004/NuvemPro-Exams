import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'simulados', loadChildren: () => import('./simulados/simulados.module').then(m => m.SimuladosModule) },
    { path: 'playground', loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule) },
    { path: '**', component: NotFoundPageComponent}
   ];
