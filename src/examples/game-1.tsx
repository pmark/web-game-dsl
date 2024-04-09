import { createElement } from "../core";
import { PlatformerTemplate } from "../templates";

const MyGame = () => (
  <PlatformerTemplate>
    <player id="hero" health={100} speed={100} />
    <enemy id="villain" attackPower={10} />
  </PlatformerTemplate>
);
