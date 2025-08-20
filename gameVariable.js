import { Game } from "./models/game/game.model.js";

export const gameVariable = {
  game: new Game(),
  tower: {
    placedTowerList: [],
  },
  ui: {
    floatingIconList: [],
    isHovering: false,
  },
  battle: {
    battleIconList: [],
    buildSpotList: [],
  },
};
