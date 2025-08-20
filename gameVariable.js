import { Game } from "./models/game/game.model.js";

export const gameVariable = {
  game: new Game(),
  tower: {
    placedTowerList: [],
  },
  ui: {
    arrowIconList: [],
    floatingIconList: [],
    isHovering: false,
    isGamePaused: false,
    isGameOver: false,
    isVictory: false,
    isDifficultyMenuOpen: false,
  },
  battle: {
    projectileList: [],
    battleIconList: [],
    buildSpotList: [],
  },
};
