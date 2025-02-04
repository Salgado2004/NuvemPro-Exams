import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
        { path: '', redirectTo: '/simulados/home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'exam/:exam/:questions', component: ExamComponent },
        { path: 'summary/:exam', component: SummaryComponent }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class SimuladosRoutingModule { }