import { Component, Input, ViewChild } from '@angular/core';
import { QueryQuestionsService } from '../../utils/query-questions.service';
import { SimuladoEventsService } from '../../utils/simulado-events.service';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css']
})
export class QuestionsContainerComponent {
  @ViewChild(QuestionCardComponent) questionCard: QuestionCardComponent;
  @Input() exam: string;
  questionNumber: string;
  questions = [];
  current = 0;

  constructor(private query: QueryQuestionsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.questionNumber = this.activatedRoute.snapshot.paramMap.get("questions");

    this.query.getQuestions(this.exam, Number.parseInt(this.questionNumber))
      .subscribe((data: any) => {
        this.questions = data;
        this.questionCard.questionData = this.questions[this.current];
        this.questionCard.questionIndex = this.current;
      });

      SimuladoEventsService.get('nextQuestion').subscribe( any => {
        this.current += 1;
        this.questionCard.questionData = this.questions[this.current];
        this.questionCard.questionIndex = this.current;
        this.questionCard.loadQuestionComponent();
      });
  }

}
