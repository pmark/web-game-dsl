import { PlatformerTemplate } from './src/templates';
import { Player, Enemy } from './src/elements';

const MyGame = () => (
  <PlatformerTemplate>
    <Player id="hero" />
    <Enemy id="villain" />
  </PlatformerTemplate>
);

