import { createElement } from "../src/core";

describe("createElement", () => {
  it("should create a complex element with nested children", () => {
    const element = createElement("game", {}, createElement("scene", {}));
    expect(element).toEqual({
      type: "game",
      props: {},
      children: [
        {
          type: "scene",
          props: {},
          children: [],
        },
      ],
    });
  });
});

describe("parseJSX", () => {
  it("should correctly parse simple JSX", () => {
    const result = (
      <game title="test game" engine="phaser">
        <scene>
          <entity key="player" />
        </scene>
      </game>
    );
    expect(result).toEqual({
      type: "game",
      props: {
        title: "test game",
        engine: "phaser",
      },
      children: [
        {
          type: "scene",
          props: {},
          children: [
            {
              type: "entity",
              props: {
                key: "player",
              },
              children: [],
            },
          ],
        },
      ],
    });
  });
});
