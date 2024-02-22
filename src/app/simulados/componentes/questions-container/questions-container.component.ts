import { Component, Input } from '@angular/core';
import { QueryQuestionsService } from '../../utils/query-questions.service';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent {
  @Input() exam: string;
  questions = [];

  constructor(private query: QueryQuestionsService) { }

  ngOnInit() {
    this.query.getQuestions(this.exam)
      .subscribe((data: any) => {
        this.questions = data;
      });
  }

}
