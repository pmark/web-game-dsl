import type { BaseElementProps } from "./BaseElement";

export interface AssetsProps extends BaseElementProps {
  resources: { [key: string]: string }; // key-value pairs of resource identifiers and paths
}

export class Assets {
  resources: Map<string, string>;

  constructor({ resources }: AssetsProps) {
    this.resources = new Map(Object.entries(resources));
  }

  getResource(key: string): string | undefined {
    return this.resources.get(key);
  }
}
