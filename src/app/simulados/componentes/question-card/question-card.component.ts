import { Component, Input, ViewChild } from '@angular/core';
import { QuestionInterface } from '../../utils/question-interface';
import { DinamicLoaderDirective } from '../../utils/dinamic-loader.directive';
import { MultipleQuestionComponent } from '../questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from '../questoes/options-question/options-question.component';
import { SelectQuestionComponent } from '../questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from '../questoes/true-false-question/true-false-question.component';
import { QuestionStructure } from '../../utils/question-structure';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  @ViewChild(DinamicLoaderDirective) private dynamicHost!: DinamicLoaderDirective; 
  @Input() questionData: QuestionInterface;
  @Input() questionIndex: number;
  questionType: string;
  totalQuestions: string;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngAfterViewInit() {
    this.loadQuestionComponent();
    this.totalQuestions = this.activatedRoute.snapshot.paramMap.get("questions");
  }

  loadQuestionComponent() {
    this.questionType = this.questionData.type;
    this.dynamicHost.view.clear();

    const questionComponentMap = {
      'multiple': MultipleQuestionComponent,
      'options': OptionsQuestionComponent,
      'select': SelectQuestionComponent,
      'truefalse': TrueFalseQuestionComponent,
    };
    const questionComponentType = questionComponentMap[this.questionType];

    const viewContainerRef = this.dynamicHost.view;
    const componentRef = viewContainerRef.createComponent<QuestionStructure>(questionComponentType);
    componentRef.instance.id = "question"+this.questionIndex;
    componentRef.instance.body = this.questionData.body;
    componentRef.instance.options = this.questionData.options;
    componentRef.instance.correct = this.questionData.correct;
  }
}
