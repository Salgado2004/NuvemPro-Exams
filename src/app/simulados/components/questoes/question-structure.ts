
import { QuestionSummary } from "../../utils/question-summary";
import { QuestionInterface } from "../../utils/question-interface";
import { SimuladoEventsService } from '../../utils/simulado-events.service';

export abstract class QuestionStructure {
    id: string;
    header: string;
    body: string | null;
    domain: string;
    options: string[];
    correct: string[];
    showNext: boolean;

    abstract verifyAnswer(): void;
    abstract validate(): boolean;
    abstract score(): number;
    abstract getAnswers(): any;
  
    /* Builds the question summary */
    getSummary(): QuestionSummary{
      return new QuestionSummary(this);
    }
    
    /* Acts as the constructor of the component, setting the question structure attributes */
    build(data: QuestionInterface, index: number, next: boolean): void {
        this.id = "question" + index;
        this.header = data.header;
        this.body = data.body;
        this.domain = data.domain;
        this.options = data.options;
        this.correct = data.correct;
        this.showNext = next;
    }

    /* Go to the next question */
    nextQuestion(): void {
      if (this.validate()) {
        SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
      }
    }
}