import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Componentes */
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

/* Páginas */
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

/* Angular material */
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    NotFoundPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
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
