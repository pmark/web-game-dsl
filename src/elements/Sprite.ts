import type { BaseElementProps } from "./BaseElement";
import { Component } from "./Component";

export interface SpriteProps extends BaseElementProps {
  src: string;
  width: number;
  height: number;
}

export class Sprite extends Component {
  src: string;
  width: number;
  height: number;

  constructor({ src, width, height }: SpriteProps) {
    super();
    this.src = src;
    this.width = width;
    this.height = height;
  }

  update(deltaTime: number): void {
    // Animation or rendering updates
  }
}
