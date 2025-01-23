import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { SimuladosRoutingModule } from './simulados.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

/* Páginas */
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';

/* Componentes */
import { ExamCardComponent } from './components/exam-card/exam-card.component';
import { CodeblockComponent } from './components/codeblock/codeblock.component';
import { ExamSummaryComponent } from './components/exam-summary/exam-summary.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { DomainSummaryComponent } from './components/domain-summary/domain-summary.component';
import { ListSimuladosComponent } from './components/list-simulados/list-simulados.component';
import { QuestionSummaryComponent } from './components/question-summary/question-summary.component';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';

/* Questões */
import { SelectQuestionComponent } from './components/questoes/select-question/select-question.component';
import { OptionsQuestionComponent } from './components/questoes/options-question/options-question.component';
import { MultipleQuestionComponent } from './components/questoes/multiple-question/multiple-question.component';
import { DragDropQuestionComponent } from './components/questoes/drag-drop-question/drag-drop-question.component';
import { TrueFalseQuestionComponent } from './components/questoes/true-false-question/true-false-question.component';

/* Utils */
import { SummaryPipe } from './utils/pipe/summary.pipe';
import { FilterLabelPipe } from './utils/pipe/filter-label.pipe';
import { QueryCodeService } from './utils/service/query-code.service';
import { QueryExamsService } from './utils/service/query-exams.service';
import { QueryQuestionsService } from './utils/service/query-questions.service';
import { DinamicLoaderDirective } from './utils/directive/dinamic-loader.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    ExamCardComponent,
    ExamSummaryComponent,
    DomainSummaryComponent,
    ListSimuladosComponent,
    QuestionCardComponent,
    QuestionSummaryComponent,
    QuestionsContainerComponent,
    MultipleQuestionComponent,
    OptionsQuestionComponent,
    SelectQuestionComponent,
    TrueFalseQuestionComponent,
    DragDropQuestionComponent,
    DinamicLoaderDirective,
    CodeblockComponent
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
    HighlightModule,
    HighlightLineNumbers,
    SummaryPipe,
    FilterLabelPipe
  ],
  providers: [
    QueryQuestionsService,
    QueryExamsService,
    QueryCodeService
  ]
})
export class SimuladosModule { }
