export interface QuestionInterface {
    id: string,
    exam: string,
    type: string,
    domain: string,
    header: string,
    code: string | null,
    body: string | null,
    options: string[],
    correct: string[]
}
