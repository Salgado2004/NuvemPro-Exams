export interface QuestionInterface {
    id: string,
    exam: string,
    type: string,
    header: string,
    body: string | null,
    options: string[],
    correct: string[]
}
