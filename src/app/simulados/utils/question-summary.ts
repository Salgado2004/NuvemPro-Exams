export interface QuestionSummary {
    header: string;
    body: string | null;
    options: string[] | null;
    correct: string[];
    score: number;
    right: boolean;
    answer: any;
}
