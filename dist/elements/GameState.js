export class GameState {
    scene;
    id;
    constructor({ scene, id }) {
        this.scene = scene;
        this.id = id;
    }
    // Typical game state keys
    static initial = "initial";
    static paused = "paused";
    static playing = "playing";
    static gameOver = "gameOver";
    static levelComplete = "levelComplete";
    static cutscene = "cutscene";
    static menu = "menu";
    static settings = "settings";
    static credits = "credits";
    static loading = "loading";
    static saving = "saving";
    static exiting = "exiting";
    static error = "error";
}
//# sourceMappingURL=GameState.js.map