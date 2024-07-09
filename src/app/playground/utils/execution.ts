import { Param } from "./param";

export interface Execution {
    command: string;
    result: string | null;
    params: Param[] | null;
    subcommands: string[] | null;
    error: string | null
}
