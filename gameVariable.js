import { player } from "./models/player.model.js";
import { Game } from "./models/game/game.model.js";

export const gameVariable = {
    game: new Game(),
    campaign: {
        campaignCurrentStep: 1,
        campaignMaxStep: 10,
        mapList: []
    },
    wave: {
        waveList: [],
        currentWaveList: [],
        maxWaveList: []
    },
    playerStats: {
        life: player.life,
        goldCoin: player.gold,
        hasClickedBuildSpot: false,
        isPlacingTower: false
    },
    tower: {
        towerList: [],
        buildSpotList: []
    },
    ui: {
        selectionScreenList: [],
        iconList: [],
        floatingIconList: [],
        buildSpotIconList: [],

        isGamePaused: false,
        isGameOver: false,
        isBuildSpotMenuOpen: false
    },
    battle: {
        projectileList: []
    }
};
