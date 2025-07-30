import { player } from "./models/player.model.js";
import { Game } from "./models/game/game.model.js";

export const gameVariable = {
  game: new Game(),
  campaign: {
    campaignCurrentStep: 1,
    campaignMaxStep: 10,
    mapList: [],
    isCampaignDashboardOpen: false,
    isStepLoaded: false,
  },
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
    availableTowerList: [],
    currentTowerIndex: 0,
  },
  tower: {
    placedTowerList: [],
    buildSpotList: [],
    buildSpotIconList: [],
  },
  ui: {
    selectionScreenList: [],
    iconList: [],
    floatingIconList: [],

    isGamePaused: false,
    isGameOver: false,
    isVictory: false,
    isBuildSpotMenuOpen: false,
    isBuildSpotMenuOpen: false,
    isDifficultyMenuOpen: false,
  },
  battle: {
    projectileList: [],
  },
};
