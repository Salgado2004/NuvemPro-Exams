import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoaderComponent } from './components/loader/loader.component';

/* Angular material */
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    LoaderComponent,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    LoaderComponent,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class SharedModule { }
