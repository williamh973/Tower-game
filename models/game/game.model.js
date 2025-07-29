import { gameVariable } from "../../gameVariable.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  crackTower,
  fireTower,
  initAvailableTowers,
  wizardTower,
} from "../building/building.instance.js";
import {
  availableTowerMenu,
  easyDifficultyIcon,
  hardDifficultyIcon,
  initIcons,
  mediumDifficultyIcon,
} from "../icon/icon.instance.js";
import {
  campaignDashboard,
  levelDifficultyScreen,
} from "../selectionScreen/selectionScreen.instance.js";

export class Game {
  constructor() {
    this.difficulty = "easy";
    this.init();
  }

  async init() {
    await initIcons();
    initAvailableTowers();
    this.initDifficultyScreen();
  }

  initDifficultyScreen() {
    gameVariable.ui.selectionScreenList.push(levelDifficultyScreen);
    gameVariable.ui.isDifficultyMenuOpen = true;

    if (gameVariable.ui.isDifficultyMenuOpen) {
      gameVariable.ui.iconList.push(
        easyDifficultyIcon,
        mediumDifficultyIcon,
        hardDifficultyIcon
      );
    }
  }

  setGameDifficulty(level) {
    const allowed = ["easy", "medium", "hard"];
    if (allowed.includes(level)) {
      this.difficulty = level;
      gameVariable.ui.isDifficultyMenuOpen = false;
      gameVariable.ui.selectionScreenList = [];
      gameVariable.ui.iconList = [];
      this.openCampaignDashboard();
    }
  }

  openCampaignDashboard() {
    gameVariable.ui.selectionScreenList.push(campaignDashboard);
    gameVariable.campaign.campaignCurrentStep = 1;
    gameVariable.campaign.isCampaignDashboardOpen = true;

    if (gameVariable.campaign.isCampaignDashboardOpen) {
      gameVariable.preparation.availableTowerList.push(
        archerTower,
        wizardTower,
        cannonTower,
        fireTower,
        barrackTower,
        crackTower
      );
      gameVariable.ui.iconList.push(availableTowerMenu);
    }
  }
}
