import { animate } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { initTowers } from "../building/building.instance.js";
import { openAvailableTowerMenuIcon } from "../icon/availableTowersMenu/availableTowersMenuIcons.instance.js";
import { stepOneIcon } from "../icon/campaignStep/campaignStepIcon.instance.js";
import {
  easyDifficultyIcon,
  hardDifficultyIcon,
  initIcons,
  mediumDifficultyIcon,
} from "../icon/icon.instance.js";
import {
  dashboard,
  initSelectionScreens,
  levelDifficultyScreen,
} from "../selectionScreen/selectionScreen.instance.js";

export class Game {
  constructor() {
    this.difficulty = "easy";
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
    gameVariable.ui.selectionScreenList.push(levelDifficultyScreen);
    gameVariable.ui.isDifficultyMenuOpen = true;

    if (gameVariable.ui.isDifficultyMenuOpen) {
      gameVariable.ui.levelIconList.push(
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
      gameVariable.ui.levelIconList = [];
      this.openDashboard();
    }
  }

  openDashboard() {
    gameVariable.ui.selectionScreenList.push(dashboard);
    dashboard.campaignCurrentStep = 1;
    dashboard.isDashboardOpen = true;

    if (dashboard.isDashboardOpen) {
      dashboard.icons.push(openAvailableTowerMenuIcon, stepOneIcon);
    }
  }
}
