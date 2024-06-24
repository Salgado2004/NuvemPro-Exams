import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SimuladosRoutingModule } from './simulados.route';

import { QueryQuestionsService } from './utils/query-questions.service';
import { QueryExamsService } from './utils/query-exams.service';

import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExamCardComponent } from './componentes/exam-card/exam-card.component';
import { ExamSummaryComponent } from './componentes/exam-summary/exam-summary.component';
import { ListSimuladosComponent} from './componentes/list-simulados/list-simulados.component';
import { QuestionsContainerComponent } from './componentes/questions-container/questions-container.component';
import { QuestionCardComponent } from './componentes/question-card/question-card.component';
import { QuestionSummaryComponent } from './componentes/question-summary/question-summary.component';

import { MultipleQuestionComponent } from './componentes/questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from './componentes/questoes/options-question/options-question.component';
import { SelectQuestionComponent } from './componentes/questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from './componentes/questoes/true-false-question/true-false-question.component';

import { LoaderComponent } from './componentes/loader/loader.component';
import { DinamicLoaderDirective } from './utils/dinamic-loader.directive';
import { SummaryPipe } from './utils/summary.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    HeaderComponent,
    ExamCardComponent,
    ExamSummaryComponent,
    QuestionsContainerComponent,
    ListSimuladosComponent,
    QuestionCardComponent,
    QuestionSummaryComponent,
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
    FormsModule,
    SummaryPipe,
    LoaderComponent
  ],
  providers: [
    QueryQuestionsService,
    QueryExamsService
  ]
})
export class SimuladosModule { }
