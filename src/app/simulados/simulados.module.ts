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
import { SummaryComponent } from './pages/summary/summary.component';

/* Componentes */
import { ExamCardComponent } from './components/exam-card/exam-card.component';
import { CodeblockComponent } from './components/codeblock/codeblock.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { DomainSummaryComponent } from './components/domain-summary/domain-summary.component';
import { ListSimuladosComponent } from './components/list-simulados/list-simulados.component';
import { QuestionSummaryComponent } from './components/question-summary/question-summary.component';
import { SummaryOnboardingComponent } from './components/summary-onboarding/summary-onboarding.component';
import { QuestionsContainerComponent } from './components/questions-container/questions-container.component';

/* Questões */
import { 
  DragDropQuestionComponent, 
  MultipleQuestionComponent, 
  OptionsQuestionComponent, 
  SelectQuestionComponent, 
  TrueFalseQuestionComponent 
} from './components/questions';

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
    SummaryComponent,
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
    CodeblockComponent,
    SummaryOnboardingComponent
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
