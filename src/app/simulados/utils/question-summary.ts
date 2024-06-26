export interface QuestionSummary {
    header: string;
    body: string | null;
    domain: string;
    options: string[] | null;
    correct: string[];
    score: number;
    right: boolean;
    answer: any;
}
