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
  totalScore:number = 0;
  finalScore:number;
  current = 0;
  finish:boolean = false;

  constructor(private query: QueryQuestionsService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.questionNumber = this.activatedRoute.snapshot.paramMap.get("questions");

    this.query.getQuestions(this.exam, Number.parseInt(this.questionNumber))
      .subscribe((data: any) => {
        this.questions = data;
        this.questionCard.questionData = this.questions[this.current];
        this.questionCard.questionIndex = this.current+1;
      });

      SimuladoEventsService.get('nextQuestion').subscribe( score => {
        this.totalScore += score;
        this.current += 1;
        this.questionCard.questionData = this.questions[this.current];
        this.questionCard.questionIndex = this.current+1;
        this.questionCard.loadQuestionComponent();
      });

      SimuladoEventsService.get('endExam').subscribe( score => {
        this.totalScore += score;
        this.finalScore = Math.round((this.totalScore / this.questions.length) * 100);
        this.finish = true;
      });
  }

}
