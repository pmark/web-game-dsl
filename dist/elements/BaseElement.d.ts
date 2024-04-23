export interface BaseElementProps {
    id?: string;
    active?: boolean;
    children?: BaseElement[];
}
export declare class BaseElement {
    id: string;
    active: boolean;
    children: BaseElement[];
    constructor({ id, active, children, }?: BaseElementProps);
    addElement(child: BaseElement): void;
    removeElement(child: BaseElement): void;
    toggleActivity(): void;
}
