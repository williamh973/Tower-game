import { player } from "./models/player.model.js";
import { Game } from "./models/game/game.model.js";

export const gameVariable = {
  game: new Game(),
  wave: {
    waveList: [],
    currentWaveList: [],
    maxWaveList: [],
  },
  player: {
    life: player.life,
    goldCoin: player.gold,
    hasClickedBuildSpot: false,
    isPlacingTower: false,
  },
  preparation: {
    hasChosenTowers: false,
    isAvailableTowersMenuOpen: false,
    isGhostedMod: false,
    availableTowerList: [],
    currentTowerIndex: 0,
  },
  tower: {
    placedTowerList: [],
    buildSpotMenuSlotList: [],
  },
  ui: {
    selectionScreenList: [],
    levelIconList: [],
    arrowIconList: [],
    floatingIconList: [],
    isHovering: false,
    isGamePaused: false,
    isGameOver: false,
    isVictory: false,
    isBuildSpotMenuOpen: false,
    isBuildSpotMenuOpen: false,
    isDifficultyMenuOpen: false,
  },
  battle: {
    projectileList: [],
    battleIconList: [],
    buildSpotList: [],
  },
};
