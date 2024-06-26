import { Domain } from "./domain";

export interface Simulado {
    name: string;
    fullname: string;
    numeroQuestoes: number;
    image: string | null;
    domains: Domain[];
}
