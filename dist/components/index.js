import { Types, defineComponent } from "bitecs";
import { registerECSComponent } from "../core/ECSComponentRegistry";
export const PositionComponent = registerECSComponent("Position", () => defineComponent({
    x: Types.f32,
    y: Types.f32,
}));
// Example: Registering a Velocity component that can be used in JSX.
export const VelocityComponent = registerECSComponent("Velocity", () => defineComponent({
    vx: Types.f32,
    vy: Types.f32,
}));
//# sourceMappingURL=index.js.map