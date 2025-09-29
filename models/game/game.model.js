import { animate } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { initTowers } from "../building/building.instance.js";
import {
  openTowerSetupMenuIcon,
  firstStepIcon,
} from "../icon/dashboardIcons/dashboardIcons.instance.js";
import { initIcons } from "../icon/icon.instance.js";
import {
  easyDifficultyIcon,
  hardDifficultyIcon,
  mediumDifficultyIcon,
} from "../icon/levelDifficultyIcons/levelDifficultyIcons.instance.js";
import {
  dashboard,
  initSelectionScreens,
  levelDifficultyMenu,
} from "../selectionScreen/selectionScreen.instance.js";
import { Player } from "../player.model.js";

export class Game {
  constructor() {
    this.player = new Player();
    this.difficulty = null;
    this.selectionScreens = [];
    this.isPaused = false;
    this.init();
  }

  async init() {
    await initIcons();
    await initTowers();
    await initSelectionScreens();
    animate(0);

    this.initDifficultyScreen();
  }

  initDifficultyScreen() {
    gameVariable.game.selectionScreens.push(levelDifficultyMenu);
    levelDifficultyMenu.isLevelDifficultyMenuOpen = true;

    if (levelDifficultyMenu.isLevelDifficultyMenuOpen) {
      levelDifficultyMenu.icons.push(
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
      levelDifficultyMenu.isLevelDifficultyMenuOpen = false;
      gameVariable.game.selectionScreens = [];
      levelDifficultyMenu.icons = [];
      this.openDashboard();
    }
  }

  openDashboard() {
    gameVariable.game.selectionScreens.push(dashboard);
    dashboard.campaignCurrentStep = 1;
    dashboard.isDashboardOpen = true;

    if (dashboard.isDashboardOpen) {
      dashboard.icons.push(openTowerSetupMenuIcon, firstStepIcon);
    }
  }
}
