import { QuestionStructure } from "../components/questoes/question-structure";

export class QuestionSummary {
    header: string;
    body: string | null;
    domain: string;
    options: string[];
    correct: string[];
    score: number;
    right: boolean;
    answer: string | string[];

    constructor(question: QuestionStructure){
        this.header = question.header;
        this.body = question.body;
        this.domain = question.domain;
        this.correct = question.correct;
        this.options = question.options;
        this.score = question.score();
        this.right = this.score == 1;
        this.answer = question.getAnswers();
    }
}
