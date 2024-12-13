import { Domain } from "./domain";

export interface Simulado {
    name: string;
    fullname: string;
    provider: string;
    questions: number;
    image: string | null;
    domains: Domain[];
}
