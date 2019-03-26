export declare class Args {
    private static instance;
    private args;
    private map;
    private constructor();
    static getInstance(): Args;
    regArg(name: string, dealFunc: (args: string[]) => any): void;
    run(): void;
}
//# sourceMappingURL=index.d.ts.map