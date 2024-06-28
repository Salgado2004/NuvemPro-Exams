import { Domain } from "./domain";

export interface Simulado {
    name: string;
    fullname: string;
    questions: number;
    image: string | null;
    domains: Domain[];
}
