import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SimuladosRoutingModule } from './simulados.routes';

/* Componentes */
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ExamCardComponent } from './components/exam-card/exam-card.component';
import { ExamSummaryComponent } from './components/exam-summary/exam-summary.component';
import { DomainSummaryComponent } from './components/domain-summary/domain-summary.component';
import { ListSimuladosComponent } from './components/list-simulados/list-simulados.component';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuestionSummaryComponent } from './components/question-summary/question-summary.component';

/* Questões */
import { SelectQuestionComponent } from './components/questoes/select-question/select-question.component';
import { OptionsQuestionComponent } from './components/questoes/options-question/options-question.component';
import { MultipleQuestionComponent } from './components/questoes/multiple-question/multiple-question.component';
import { DragDropQuestionComponent } from './components/questoes/drag-drop-question/drag-drop-question.component';
import { TrueFalseQuestionComponent } from './components/questoes/true-false-question/true-false-question.component';

/* Utils */
import { SummaryPipe } from './utils/summary.pipe';
import { QueryExamsService } from './utils/query-exams.service';
import { QueryQuestionsService } from './utils/query-questions.service';
import { DinamicLoaderDirective } from './utils/dinamic-loader.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    ExamCardComponent,
    ExamSummaryComponent,
    QuestionsContainerComponent,
    DomainSummaryComponent,
    ListSimuladosComponent,
    QuestionCardComponent,
    QuestionSummaryComponent,
    MultipleQuestionComponent,
    OptionsQuestionComponent,
    SelectQuestionComponent,
    TrueFalseQuestionComponent,
    DragDropQuestionComponent,
    DinamicLoaderDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    SimuladosRoutingModule,
    RouterLink,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SummaryPipe
  ],
  providers: [
    QueryQuestionsService,
    QueryExamsService
  ]
})
export class SimuladosModule { }
