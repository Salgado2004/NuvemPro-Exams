import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, ViewChild, inject } from '@angular/core';
import { QuestionInterface } from '../../utils/model/question-interface';
import { SimuladoEventsService } from '../../utils/service/simulado-events.service';
import { DinamicLoaderDirective } from '../../utils/directive/dinamic-loader.directive';
import { ReportDialogComponent } from '../../../shared/components/report-dialog/report-dialog.component';
import {
  QuestionStructure,
  DragDropQuestionComponent,
  MultipleQuestionComponent,
  OptionsQuestionComponent,
  SelectQuestionComponent,
  TrueFalseQuestionComponent
} from '../questions';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  @ViewChild(DinamicLoaderDirective) private dynamicHost!: DinamicLoaderDirective;
  @Input() questionData: QuestionInterface;
  @Input() questionIndex: number;
  @Input() totalQuestions: number;
  questionType: string;
  examName: string;
  questionInstance: QuestionStructure;
  readonly dialog = inject(MatDialog);

  constructor(private route: ActivatedRoute) {
    this.examName = this.route.snapshot.paramMap.get("exam");
  }

  ngAfterViewInit() {
    this.loadQuestionComponent();
  }

  /* Updates the question data and reload the question type component */
  public setQuestionData(data: QuestionInterface) {
    this.questionData = data;
    this.loadQuestionComponent();
  }

  /* Initializes the question structure component */
  loadQuestionComponent() {
    this.questionType = this.questionData.type;

    /* Randomize options array */
    if (this.questionType != "truefalse" && this.questionType != "dragdrop") {
      this.questionData.options = this.questionData.options.sort(() => Math.random() - Math.random());
    }
    /* Clears the question structure component */
    this.dynamicHost.view.clear();

    /* Set the component based on the question type */
    const questionComponentMap = {
      'multiple': MultipleQuestionComponent,
      'options': OptionsQuestionComponent,
      'select': SelectQuestionComponent,
      'truefalse': TrueFalseQuestionComponent,
      'dragdrop': DragDropQuestionComponent
    };
    const questionComponentType = questionComponentMap[this.questionType];

    /* Creates the question structure component */
    const viewContainerRef = this.dynamicHost.view;
    this.questionInstance = viewContainerRef.createComponent<QuestionStructure>(questionComponentType).instance;

    /* Initializes the question data */
    this.questionInstance.build(this.questionData, this.questionIndex, (this.questionIndex < this.totalQuestions));
  }

  /* Opens dialog window for reporting */
  reportQuestion() {
    this.dialog.open(ReportDialogComponent, {
      data: "Question " + this.questionData.id + ": content/" + this.examName + "/questions.json"
    });
  }

  /* Finishes the exam */
  finishExam() {
    SimuladoEventsService.get('endExam').emit(this.questionInstance.getSummary());
  }
}
