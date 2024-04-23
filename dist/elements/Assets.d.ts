import type { BaseElementProps } from "./BaseElement";
export interface AssetsProps extends BaseElementProps {
    resources: {
        [key: string]: string;
    };
}
export declare class Assets {
    resources: Map<string, string>;
    constructor({ resources }: AssetsProps);
    getResource(key: string): string | undefined;
}
