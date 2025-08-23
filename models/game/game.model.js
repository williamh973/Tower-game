import { animate } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { initTowers } from "../building/building.instance.js";
import { openAvailableTowerMenuIcon } from "../icon/towerSetupMenu/availableTowerIcon/availableTowerIcon.instance.js";
import { stepOneIcon } from "../icon/campaignStep/campaignStepIcon.instance.js";
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
    this.selectionScreenList = [];
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
    gameVariable.game.selectionScreenList.push(levelDifficultyMenu);
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
      gameVariable.game.selectionScreenList = [];
      levelDifficultyMenu.icons = [];
      this.openDashboard();
    }
  }

  openDashboard() {
    gameVariable.game.selectionScreenList.push(dashboard);
    dashboard.campaignCurrentStep = 1;
    dashboard.isDashboardOpen = true;

    if (dashboard.isDashboardOpen) {
      dashboard.icons.push(openAvailableTowerMenuIcon, stepOneIcon);
    }
  }
}
