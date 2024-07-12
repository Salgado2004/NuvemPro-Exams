import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CliComponent } from './pages/cli/cli.component';
import { PlaygroundRoutingModule } from './playground.routes';
import { ApiPlaygroundService } from './utils/api-playground.service';
import { ConsoleComponent } from './components/console/console.component';
import { HelpDialogComponent } from './components/help-dialog/help-dialog.component';

@NgModule({
  declarations: [
    CliComponent,
    ConsoleComponent,
    HelpDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    PlaygroundRoutingModule
  ],
  providers:[
    ApiPlaygroundService
  ]
})
export class PlaygroundModule { }
