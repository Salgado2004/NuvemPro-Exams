import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SimuladosRoutingModule } from './simulados.route';
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { QuestionsContainerComponent } from './componentes/questions-container/questions-container.component';
import { QuestionCardComponent } from './componentes/question-card/question-card.component';
import { ListSimuladosComponent} from './componentes/list-simulados/list-simulados.component';
import { QueryQuestionsService } from './utils/query-questions.service';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    QuestionsContainerComponent,
    ListSimuladosComponent,
    QuestionCardComponent
  ],
  imports: [
    CommonModule,
    SimuladosRoutingModule,
    RouterLink,
    NgFor,
    HttpClientModule
  ],
  providers: [
    QueryQuestionsService
  ]
})
export class SimuladosModule { }
