export interface GameProps {
    title: string;
    engine: string;
}
export interface SceneProps {
    id: string;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            game: GameProps;
            scene: SceneProps;
        }
    }
}
