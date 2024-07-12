export interface Param {
    name: string;
    effect: {
        allowedValues: string[];
        defaultOutput: string;
        description: string;
    };
}
