import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Componentes */
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContributingComponent } from './components/contributing/contributing.component';
import { ReportDialogComponent } from './components/report-dialog/report-dialog.component';

/* Páginas */
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

/* Angular material */
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';

/* Utils */
import { OctokitService } from './utils/octokit.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    NotFoundPageComponent,
    HomeComponent,
    ReportDialogComponent,
    ContributingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoaderComponent,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    LoaderComponent,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [
    OctokitService
  ]
})
export class SharedModule { }
