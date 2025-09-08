import { Game } from "./models/game/game.model.js";

export const gameVariable = {
  game: new Game(),
  tower: {
    placedTowerList: [],
  },
  ui: { isHovering: false },
  battle: {
    battleIconList: [],
  },
};
