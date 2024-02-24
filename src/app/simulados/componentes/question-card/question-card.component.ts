import { Component, Input, ViewChild } from '@angular/core';
import { QuestionInterface } from '../../utils/question-interface';
import { DinamicLoaderDirective } from '../../utils/dinamic-loader.directive';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css'
})
export class QuestionCardComponent {
  @ViewChild(DinamicLoaderDirective, {static: true}) dynamicHost: DinamicLoaderDirective;
  @Input() questionData: QuestionInterface;
}
