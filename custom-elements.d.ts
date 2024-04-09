import type {
  AssetsProps,
  BaseElementProps,
  ComponentProps,
  EnemyProps,
  EntityProps,
  EntityStateProps,
  GameProps,
  GameStateProps,
  PlayerProps,
  ProjectileProps,
  SceneProps,
  SpriteProps,
  SystemProps,
} from "./src/elements";

// Add all element types from src/elements to the JSX namespace
declare global {
  namespace JSX {
    interface IntrinsicElements {
      assets: AssetsProps;
      baseElement: BaseElementProps;
      component: ComponentProps;
      enemy: EnemyProps;
      entity: EntityProps;
      entityState: EntityStateProps;
      game: GameProps;
      gameState: GameStateProps;
      player: PlayerProps;
      projectile: ProjectileProps;
      scene: SceneProps;
      sprite: SpriteProps;
      system: SystemProps;
    }
  }
}
