import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CliComponent } from './pages/cli/cli.component';
import { PlaygroundRoutingModule } from './playground.routes';
import { ConsoleComponent } from './components/console/console.component';
import { ApiPlaygroundService } from './utils/api-playground.service';



@NgModule({
  declarations: [
    CliComponent,
    ConsoleComponent
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
