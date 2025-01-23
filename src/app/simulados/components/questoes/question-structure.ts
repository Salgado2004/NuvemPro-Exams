
import { QuestionSummary } from "../../utils/model/question-summary";
import { QuestionInterface } from "../../utils/model/question-interface";
import { SimuladoEventsService } from '../../utils/service/simulado-events.service';

export abstract class QuestionStructure {
    id: string;
    data: QuestionInterface;
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
        this.showNext = next;
        this.data = data;
    }

    /* Go to the next question */
    nextQuestion(): void {
      if (this.validate()) {
        SimuladoEventsService.get('nextQuestion').emit(this.getSummary());
      }
    }
}