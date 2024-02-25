import { Component, Input } from '@angular/core';
import { QuestionStructure } from '../../../utils/question-structure';

@Component({
  selector: 'app-multiple-question',
  templateUrl: './multiple-question.component.html',
  styleUrl: './multiple-question.component.css'
})
export class MultipleQuestionComponent implements QuestionStructure {
  id: string;
  header: string;
  body: string;
  options: string[];
  correct: string[];
}
