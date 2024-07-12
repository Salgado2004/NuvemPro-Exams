import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CliComponent } from './pages/cli/cli.component';

export const routes: Routes = [
        {path: '', redirectTo: '/playground/cli', pathMatch: 'full'},
        {path: 'cli', component: CliComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PlaygroundRoutingModule { }