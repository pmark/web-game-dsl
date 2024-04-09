import { createElement } from "../core";
// import { Scene, Entity, Component, Game } from "../elements";

const Jump = () => <component id="Jump" />;

const PlatformerTemplate = () => (
  <game>
    <scene id="main" entities={[]}>
      <entity id="player" components={[]}>
        <sprite src="playerSprite.png" width={64} height={128} />
        <Jump height={256} />
      </entity>
      <entity id="platform" components={[]} />
    </scene>
  </game>
);

export default PlatformerTemplate;
