import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SimuladosRoutingModule } from './simulados.route';
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExamCardComponent } from './componentes/exam-card/exam-card.component';
import { QuestionsContainerComponent } from './componentes/questions-container/questions-container.component';
import { QuestionCardComponent } from './componentes/question-card/question-card.component';
import { ListSimuladosComponent} from './componentes/list-simulados/list-simulados.component';
import { QueryQuestionsService } from './utils/query-questions.service';
import { DinamicLoaderDirective } from './utils/dinamic-loader.directive';

import { MultipleQuestionComponent } from './componentes/questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from './componentes/questoes/options-question/options-question.component';
import { SelectQuestionComponent } from './componentes/questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from './componentes/questoes/true-false-question/true-false-question.component';
import { QueryExamsService } from './utils/query-exams.service';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    HeaderComponent,
    ExamCardComponent,
    QuestionsContainerComponent,
    ListSimuladosComponent,
    QuestionCardComponent,
    MultipleQuestionComponent,
    OptionsQuestionComponent,
    SelectQuestionComponent,
    TrueFalseQuestionComponent,
    DinamicLoaderDirective
  ],
  imports: [
    CommonModule,
    SimuladosRoutingModule,
    RouterLink,
    NgFor,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QueryQuestionsService,
    QueryExamsService
  ]
})
export class SimuladosModule { }
