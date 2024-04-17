const GameStates = () => (
  <>
    <GameState
      name="MainMenu"
      willEnter={handleMainMenuWillEnter}
      didEnter={handleMainMenuDidEnter}
    >
      <UI>
        <Button name="startButton" onClick={handleStartGame} />
        <Button name="optionsButton" onClick={handleOptions} />
        <Button name="creditsButton" onClick={handleCredits} />
      </UI>
      <Scene>
        <Entities />
      </Scene>
    </GameState>

    <GameState
      name="GamePlay"
      willEnter={handleGamePlayWillEnter}
      didEnter={handleGamePlayDidEnter}
      willExit={handleGamePlayWillExit}
      didExit={handleGamePlayDidExit}
    >
      <UI>
        <Display name="scoreDisplay" />
        <Button name="pauseButton" onClick={handlePauseGame} />
        <Bar name="healthBar" />
      </UI>
      <Scene>
        <Entity
          name="player"
          onCollision={handlePlayerCollision}
          onPowerUp={handlePlayerPowerUp}
        >
          <PositionComponent x={100} y={200} />
          <VelocityComponent x={5} y={0} />
          <HealthComponent value={100} />
          <RenderableComponent spriteId="playerSprite" />
          <State name="isAlive" value={true} />
          <State name="isMoving" value={true} />
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
        <State name="isPaused" value={false} />
        <State name="isGameOver" value={false} />
      </Scene>
    </GameState>

    <GameState
      name="GameOver"
      willEnter={handleGameOverWillEnter}
      didEnter={handleGameOverDidEnter}
    >
      <UI>
        <Button name="restartButton" onClick={handleRestartGame} />
        <Button name="mainMenuButton" onClick={handleBackToMenu} />
      </UI>
      <Scene>
        <Entities />
      </Scene>
    </GameState>
  </>
);

// Example handler functions
function handleStartGame() {
  console.log("Game started");
}
function handleOptions() {
  console.log("Options accessed");
}
function handleCredits() {
  console.log("Credits viewed");
}
function handlePauseGame() {
  console.log("Game paused");
}
function handlePlayerCollision() {
  console.log("Player collision detected");
}
function handlePlayerPowerUp() {
  console.log("Player received power up");
}
function handleEnemyCollision() {
  console.log("Enemy collision detected");
}
function handleCollectPowerUp() {
  console.log("Power up collected");
}
function handleRestartGame() {
  console.log("Game restarted");
}
function handleBackToMenu() {
  console.log("Returned to main menu");
}
function handleMainMenuWillEnter() {
  console.log("Entering Main Menu");
}
function handleMainMenuDidEnter() {
  console.log("Entered Main Menu");
}
function handleGamePlayWillEnter() {
  console.log("Will enter gameplay");
}
function handleGamePlayDidEnter() {
  console.log("Gameplay started");
}
function handleGamePlayWillExit() {
  console.log("Exiting gameplay");
}
function handleGamePlayDidExit() {
  console.log("Exited gameplay");
}
function handleGameOverWillEnter() {
  console.log("Will enter Game Over state");
}
function handleGameOverDidEnter() {
  console.log("Game Over state entered");
}
