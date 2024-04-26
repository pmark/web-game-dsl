<Game title="Gesture Racer">
  <Assets>
    <SpriteSheet src="cars.png" />
    <TileMap src="race_track.tmx" />
    <Sound src="engine.wav" />
  </Assets>

  <Scene id="mainRace">
    <TileMapRenderer src="race_track.tmx" collision="true" />

    <Entity id="playerCar">
      <Position x="100" y="150" />
      <Sprite spriteSheet="cars.png" frame="1" />
      <Health initial="100" />
      <Velocity />
      <GestureControl type="swipe" sensitivity="high" />
    </Entity>

    <Systems>
      <MovementSystem />
      <ControlSystem type="GestureControl" />
      <SoundSystem trigger="collide" sound="engine.wav" />
      <ScoringSystem pointsPerSecond="10" />
    </Systems>

    <PowerUp id="nitroBoost">
      <VelocityModifier increase="20%" duration="5s" />
    </PowerUp>

    <Spawner type="obstacle" location="{fromTileMap: 'obstacleLocations'}" frequency="30s" />
  </Scene>
</Game>
