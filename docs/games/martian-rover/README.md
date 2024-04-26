# Martian Rover: Moon Patrol inspired arcade game

**Software Requirements Outline**

**Entities:**

1. **PlayerEntity**: Represents the player's spacecraft.
2. **AlienEntity**: Represents an alien spaceship that shoots bullets at the player.
3. **BulletEntity**: Represents a bullet shot by an alien or the player.

**Components:**

1. **PositionComponent**: Handles entity position (x, y).
2. **SizeComponent**: Handles entity size (width, height).
3. **VelocityComponent**: Handles entity velocity (speed, direction).
4. **HealthComponent**: Handles entity health points.
5. **TextureComponent**: Handles entity texture.

**Systems:** 
1. **MovementSystem**: Updates entities' positions based on their velocities.
2. **CollisionSystem**: Checks for collisions between entities and handles them accordingly.
3. **RenderingSystem**: Renders entities to the screen using their textures and positions.
4. **BulletSystem**: Updates bullets' positions, checks for collisions, and removes them when off-screen.

**Assets:** 
1. **PlayerTexture**: The player's spacecraft texture.
2. **AlienTexture**: The alien spaceship texture.
3. **BulletTexture**: The bullet texture.
4. **BackgroundImage**: The game background image.

**Game Events:**

1. **PlayerShot**: Emitted by `PlayerEntity` when the player shoots a bullet. (Handled by `BulletSystem`)
2. **AlienShot**: Emitted by `AlienEntity` when an alien shoots a bullet. (Handled by `BulletSystem`)
3. **Collision**: Emitted when two entities collide. (Handled by `CollisionSystem`)
4. **PlayerHit**: Emitted when the player is hit by a bullet. (Handled by `HealthComponent` of `PlayerEntity`)
5. **AlienHit**: Emitted when an alien is hit by a bullet. (Handled by `HealthComponent` of `AlienEntity`)
6. **BulletRemoved**: Emitted when a bullet is removed from the game due to off-screen or collision. (Handled by `BulletSystem`)
7. **LevelComplete**: Emitted when the player completes a level. (Handled by `GameScene`)

**User Input Requirements:**

1. **PlayerInput**: The player can control their spacecraft using the following inputs:
	* Left arrow key: Move left
	* Right arrow key: Move right
	* Space bar: Shoot bullet

Note that this outline provides a basic framework for implementing the game mechanics and entities. You may need to add or modify components, systems, and assets as you develop the game further.
