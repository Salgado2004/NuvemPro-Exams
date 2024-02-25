import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrl: './select-question.component.css'
})
export class SelectQuestionComponent implements QuestionStructure{
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
}
