import { Component, Input, ViewChild } from '@angular/core';
import { QuestionInterface } from '../../utils/question-interface';
import { DinamicLoaderDirective } from '../../utils/dinamic-loader.directive';
import { MultipleQuestionComponent } from '../questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from '../questoes/options-question/options-question.component';
import { SelectQuestionComponent } from '../questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from '../questoes/true-false-question/true-false-question.component';
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
  @Input() totalQuestions: string;
  questionType: string;
  questionInstance: any;

  ngAfterViewInit() {
    this.loadQuestionComponent();
  }

  public setQuestionData(data: QuestionInterface){
    this.questionData = data;
    this.loadQuestionComponent();
  }

  loadQuestionComponent() {
    this.questionType = this.questionData.type;
    if(this.questionType != "truefalse"){
      this.questionData.options = this.questionData.options.sort(() => Math.random() - Math.random());
    }
    this.dynamicHost.view.clear();

    const questionComponentMap = {
      'multiple': MultipleQuestionComponent,
      'options': OptionsQuestionComponent,
      'select': SelectQuestionComponent,
      'truefalse': TrueFalseQuestionComponent,
    };
    const questionComponentType = questionComponentMap[this.questionType];

    const viewContainerRef = this.dynamicHost.view;
    this.questionInstance = viewContainerRef.createComponent<QuestionStructure>(questionComponentType);
    this.questionInstance.instance.id = "question"+this.questionIndex;
    this.questionInstance.instance.header = this.questionData.header;
    this.questionInstance.instance.body = this.questionData.body;
    this.questionInstance.instance.options = this.questionData.options;
    this.questionInstance.instance.correct = this.questionData.correct;
    this.questionInstance.instance.showNext = (this.questionIndex < Number.parseInt(this.totalQuestions));
  }

  finishExam(){
    SimuladoEventsService.get('endExam').emit(this.questionInstance.instance.getSummary());
  }
}
