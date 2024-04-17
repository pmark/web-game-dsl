import { Types, defineComponent } from "bitecs";
import { registerECSComponent } from "../core/ECSComponentRegistry";

/**
 * @component PositionComponent
 * @description Holds the coordinates for the entity's position in the game world.
 * This component is critical for determining where to render entities and for collision detection.
 * @prop {number} x - The horizontal position of the entity on the game canvas.
 * @prop {number} y - The vertical position of the entity on the game canvas.
 */
export const PositionComponent = registerECSComponent("Position", () =>
  defineComponent({
    x: Types.f32,
    y: Types.f32,
  })
);

/**
 * @component VelocityComponent
 * @description Stores the speed and direction of an entity's movement.
 * This component is used by the MovementSystem to update the entity's position over time.
 * @prop {number} x - The speed of the entity along the horizontal axis.
 * @prop {number} y - The speed of the entity along the vertical axis.
 */
export const VelocityComponent = registerECSComponent("Velocity", () =>
  defineComponent({
    vx: Types.f32,
    vy: Types.f32,
  })
);

/**
 * @component HealthComponent
 * @description Manages the health or structural integrity of an entity, particularly used for the player's snowball.
 * This component interacts with various game mechanics, such as collision impacts and environmental hazards.
 * @prop {number} value - The current health value of the entity. Lower values may trigger game-end conditions.
 */
export const HealthComponent = registerECSComponent("Health", () =>
  defineComponent({
    value: Types.f32,
  })
);

/**
 * @component RenderableComponent
 * @description Links an entity to a specific visual representation, like a sprite or animation.
 * It is utilized by the RenderSystem to draw the entity on the game canvas.
 * @prop {string} spriteId - The identifier for the sprite or graphic to be rendered for this entity.
 */
export const RenderableComponent = registerECSComponent("Renderable", () =>
  defineComponent({
    spriteId: Types.ui32,
  })
);

/**
 * @component TrackBuilderComponent
 * @description Used to dynamically generate and modify the track on which the player moves.
 * This component should handle the creation of the track and potentially hazardous areas like lava,
 * and adjust the track's properties based on game progression and player actions.
 * @prop {number} length - The total length of the track that the component should generate.
 * @prop {string} trackType - The type of track being generated, e.g., "normal", "icy", or "lava".
 */
export const TrackBuilderComponent = registerECSComponent("TrackBuilder", () =>
  defineComponent({
    length: Types.ui32,
    trackType: Types.ui32,
  })
);
