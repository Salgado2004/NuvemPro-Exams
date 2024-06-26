import { QuestionInterface } from "./question-interface";

export interface QuestionStructure {
    id: string,
    header: string,
    body: string | null,
    domain: string;
    options: string[],
    correct: string[],
    showNext: boolean,
    verifyAnswer(): void,
    score():number;
    build(data: QuestionInterface, index: number, next: boolean):void;
}
