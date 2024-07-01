import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SimuladosRoutingModule } from './simulados.route';

import { QueryQuestionsService } from './utils/query-questions.service';
import { QueryExamsService } from './utils/query-exams.service';

import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exam/exam.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExamCardComponent } from './componentes/exam-card/exam-card.component';
import { ExamSummaryComponent } from './componentes/exam-summary/exam-summary.component';
import { DomainSummaryComponent } from './componentes/domain-summary/domain-summary.component';
import { ListSimuladosComponent} from './componentes/list-simulados/list-simulados.component';
import { QuestionsContainerComponent } from './componentes/questions-container/questions-container.component';
import { QuestionCardComponent } from './componentes/question-card/question-card.component';
import { QuestionSummaryComponent } from './componentes/question-summary/question-summary.component';

import { MultipleQuestionComponent } from './componentes/questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from './componentes/questoes/options-question/options-question.component';
import { SelectQuestionComponent } from './componentes/questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from './componentes/questoes/true-false-question/true-false-question.component';
import { DragDropQuestionComponent } from './componentes/questoes/drag-drop-question/drag-drop-question.component';

import { LoaderComponent } from './componentes/loader/loader.component';
import { DinamicLoaderDirective } from './utils/dinamic-loader.directive';
import { SummaryPipe } from './utils/summary.pipe';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HomeComponent,
    ExamComponent,
    HeaderComponent,
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
    SimuladosRoutingModule,
    RouterLink,
    NgFor,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SummaryPipe,
    LoaderComponent,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [
    QueryQuestionsService,
    QueryExamsService
  ]
})
export class SimuladosModule { }
