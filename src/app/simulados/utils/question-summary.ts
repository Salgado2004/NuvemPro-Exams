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
        this.header = question.data.header;
        this.body = question.data.body;
        this.domain = question.data.domain;
        this.correct = question.data.correct;
        this.options = question.data.options;
        this.score = question.score();
        this.right = this.score == 1;
        this.answer = question.getAnswers();
    }
}
