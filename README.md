# :construction: Web Game DSL :construction:

__WORK IN PROGRESS__

Web Game DSL is a domain-specific language (DSL) implemented in TypeScript for building interactive web-based games. This project abstracts complex functionalities into simple, reusable JSX components. These components interface with underlying game engines like Phaser 3, allowing developers to focus on crafting game logic and design rather than boilerplate code. The DSL is designed to be engine-agnostic, with the initial implementation targeting Phaser 3, and can be adapted to other engines to meet various development needs.

## Features

- **Component-Based Structure**: Uses JSX to define game elements, making the codebase declarative and readable.
- **Engine-Agnostic Design**: Built to support Phaser 3 with possibilities to adapt to other game engines.
- **Type-Safe Event Handling**: Utilizes TypeScript to ensure that event names and parameters are consistent throughout the application.
- **Streamlined Audio Management**: Simplifies audio integration with components for sound registration, event-based playback, and dynamic loading.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- A package manager like npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pmark/web-game-dsl.git
   cd web-game-dsl
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project (if applicable):
   ```bash
   npm run build
   ```

### Usage

Define your game declaratively, separating concerns explicitly.

```typescript
import { Game } from "web-game-dsl";

const MyGame = () => {
  return (
    <Game>
      <Assets />
      <Scenes />
      <States />
      <HUD />
      <UserInput />
      <Achievements />
      <Localization />
    </Game>
  );
};
```

#### Assets

To use the DSL in your game projects, import the necessary components from the built package and integrate them into your game scenes:

```typescript
import {
  SoundRegistry,
  EventSoundMap,
  PreloadSounds,
} from "web-game-dsl";

const Assets = () => {
    <SoundRegistry
        basePath="audio/"
        extension=".mp3"
        keys={["bg_music", "collect"]}
        volume={1.0}
    />

    <EventSoundMap
        mappings={{
            [GameEvents.GameStart]: "bg_music",
            [GameEvents.PowerupCollected]: "collect",
        }}
    />

    <PreloadSounds keys={["bg_music", "collect"]} />
```

#### Scenes

Define scenes using ECS constructs.

```typescript
const Scenes = () => {
  return (
    <Scene name="Gameplay">
      <Entity
        name="player"
        onCollision={handlePlayerCollision}
        onPowerUp={handlePlayerPowerUp}
      >
        <PositionComponent x={100} y={200} />
        <VelocityComponent x={5} y={0} />
        <HealthComponent value={100} />
        <RenderableComponent spriteId="playerSprite" />

        <PlayerEntityStateMachine />
      </Entity>

      <Entity name="enemy" onCollision={handleEnemyCollision}>
        <PositionComponent x={150} y={200} />
        <VelocityComponent x={-5} y={0} />
        <HealthComponent value={50} />
        <RenderableComponent spriteId="enemySprite" />
        <State name="isAlive" value={true} />
      </Entity>

      <Entity name="powerUp" onCollect={handleCollectPowerUp}>
        <PositionComponent x={300} y={150} />
        <RenderableComponent spriteId="powerUpSprite" />
        <State name="isActive" value={true} />
      </Entity>

      <MovementSystem />
      <CollisionSystem />
      <RenderSystem />
      <HealthSystem />
    </Scene>
  );
};
```

#### States

State Machines are ideal for managing complex state transitions and behaviors in games. They provide a structured way to handle changes in game state, scene state, and entity state, which is particularly useful for:

**Game State:** Managing overall game progress, such as transitioning between different game modes (menu, in-game, pause, game over).

**Scene State:** Controlling scene-specific conditions and transitions, like shifting from a calm to a hostile environment depending on player actions.

**Entity State:** Handling entity behaviors, such as an enemy switching between alert, chase, and attack modes depending on the player's proximity.

State Machines help in defining clear state transitions and can trigger side effects (using entry/exit actions), making them a powerful tool for game logic encapsulation. They ensure that all possible states and transitions are well thought out and that the game reacts predictably to a range of inputs.

```typescript
const PlayerEntityStateMachine = () => {
    <StateMachine
        id="playerStateMachine"
        onWillEnterState={(currentState, nextState) => console.log("Preparing to switch player states")}
        onDidEnterState={(currentState, previousState) => console.log("Player state activated")}
        onWillExitState={(currentState, nextState) => console.log("Preparing to leave player state")}
        onDidExitState={(currentState, previousState) => console.log("Player state deactivated")}
    >
        <State name="idle" />
        <State name="running" />
        <State name="jumping" />
    </StateMachine>
```

#### HUD

Any game state or scene can have an overlaid web based view. Using a reactive rendering solution like React, Preact, Vue or Lit is recommended. Bidirectional, reactive data changes are efficiently communicted via the `useSignal` hook.

#### UserInput

Easily configure how the user controls your game via touch gestures, keyboard, mouse, etc.

```typescript
const UserInput = () => {
  return (
    <UserInput>
      <KeyBinding key="space" action={() => console.log("Jump")} />
      <KeyBinding key="p" event={GameEvents.GamePaused} />
    </UserInput>
  );
};
```

#### Config

A default game configuration object will be loaded automatically from this package unless your project has a file named `web-game-dsl-config.ts` in the root folder, or if the Game element specifies the config e.g. `<Game config={yourGameConfig}>`. Take a look at the [default configuration](./src/core/default-config.ts) to see what's possible.

#### Achievements

TODO

#### Localization

TODO

## Documentation

For more detailed documentation, including a complete API reference and examples, please refer to the `docs/` directory in this repository.

## Contributing

We welcome contributions from the community! Whether you're fixing a bug, improving the documentation, or proposing a new feature, your help is appreciated.

To contribute:

1. Fork the repository.
2. Create a new branch for each feature or improvement.
3. Send a pull request from each feature branch to the main branch for review.

## License

This project is licensed under the [MIT License](LICENSE).
