import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';

export const routes: Routes = [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home' , component: HomeComponent},
        {path: 'teste/:exam/:questions', component: ExamComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SimuladosRoutingModule { }