export interface GameProps {
    title: string;
    engine: string;
    children?: any;
}
export interface EntityProps {
    key: string;
    children?: any;
}
export interface SceneProps {
    id: string;
    children?: any;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            game: GameProps;
            scene: SceneProps;
            entity: EntityProps;
        }
    }
}
