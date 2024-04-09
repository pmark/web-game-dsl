export interface BaseElementProps {
  id?: string;
  active?: boolean;
  children?: BaseElement[];
}

export class BaseElement {
  id: string;
  active: boolean;
  children: BaseElement[];

  constructor({
    id = "",
    active = true,
    children = [],
  }: BaseElementProps = {}) {
    this.id = id;
    this.active = active;
    this.children = children;
  }

  addElement(child: BaseElement): void {
    this.children.push(child);
  }

  removeElement(child: BaseElement): void {
    this.children = this.children.filter((c) => c !== child);
  }

  toggleActivity(): void {
    this.active = !this.active;
  }
}
