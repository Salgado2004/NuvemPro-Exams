import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { QuestionInterface } from '../../utils/question-interface';
import { DinamicLoaderDirective } from '../../utils/dinamic-loader.directive';
import { MultipleQuestionComponent } from '../questoes/multiple-question/multiple-question.component';
import { OptionsQuestionComponent } from '../questoes/options-question/options-question.component';
import { SelectQuestionComponent } from '../questoes/select-question/select-question.component';
import { TrueFalseQuestionComponent } from '../questoes/true-false-question/true-false-question.component';
import { QuestionStructure } from '../../utils/question-structure';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  @ViewChild(DinamicLoaderDirective) private dynamicHost!: DinamicLoaderDirective; 
  @Input() questionData: QuestionInterface;
  questionType: string;

  ngAfterViewInit() {
    this.questionType = this.questionData.type;
    this.loadQuestionComponent();
  }

  loadQuestionComponent() {
    let questionComponentType: any;

    switch (this.questionType) {
      case 'multiple':
        questionComponentType = MultipleQuestionComponent;
        break;
      case 'options':
        questionComponentType = OptionsQuestionComponent;
        break;
      case 'select':
        questionComponentType = SelectQuestionComponent;
        break;
      case 'truefalse':
        questionComponentType = TrueFalseQuestionComponent;
        break;
    }

    const viewContainerRef = this.dynamicHost.view;
    const componentRef = viewContainerRef.createComponent<QuestionStructure>(questionComponentType);
    componentRef.instance.id = "question"+this.questionData.id;
    componentRef.instance.header = this.questionData.header;
    componentRef.instance.body = this.questionData.body;
    componentRef.instance.options = this.questionData.options;
    componentRef.instance.correct = this.questionData.correct;
  }
}
