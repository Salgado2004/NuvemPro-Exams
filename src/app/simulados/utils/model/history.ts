import { QuestionSummary } from "./question-summary"
import { Simulado } from "./simulado"

export interface ExamSummary {
    exam: Simulado,
    summary: QuestionSummary[],
    date: string
}

export interface ExamHistory {
    attempts: ExamSummary[]
}