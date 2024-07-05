import { Component, Input, ViewChild } from '@angular/core';
import { QuestionInterface } from '../../utils/question-interface';
import { DinamicLoaderDirective } from '../../utils/dinamic-loader.directive';
import { MultipleQuestionComponent } from '../questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from '../questoes/options-question/options-question.component';
import { SelectQuestionComponent } from '../questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from '../questoes/true-false-question/true-false-question.component';
import { DragDropQuestionComponent } from '../questoes/drag-drop-question/drag-drop-question.component';
import { QuestionStructure } from '../../utils/question-structure';
import { SimuladoEventsService } from '../../utils/simulado-events.service';

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
  questionInstance: QuestionStructure;
  readonly dialog = inject(MatDialog);


  ngAfterViewInit() {
    this.loadQuestionComponent();
  }

  public setQuestionData(data: QuestionInterface){
    this.questionData = data;
    this.loadQuestionComponent();
  }

  loadQuestionComponent() {
    this.questionType = this.questionData.type;
    if(this.questionType != "truefalse" && this.questionType != "dragdrop"){
      this.questionData.options = this.questionData.options.sort(() => Math.random() - Math.random());
    }
    this.dynamicHost.view.clear();

    const questionComponentMap = {
      'multiple': MultipleQuestionComponent,
      'options': OptionsQuestionComponent,
      'select': SelectQuestionComponent,
      'truefalse': TrueFalseQuestionComponent,
      'dragdrop': DragDropQuestionComponent
    };
    const questionComponentType = questionComponentMap[this.questionType];

    const viewContainerRef = this.dynamicHost.view;
    this.questionInstance = viewContainerRef.createComponent<QuestionStructure>(questionComponentType).instance;
    this.questionInstance.build(this.questionData, this.questionIndex, (this.questionIndex < this.totalQuestions));
  }

  finishExam(){
    SimuladoEventsService.get('endExam').emit(this.questionInstance.getSummary());
  }
}
