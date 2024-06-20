export interface QuestionStructure {
    id: string,
    header: string,
    body: string | null,
    options: string[],
    correct: string[],
    showNext: boolean
    score():number;
}
