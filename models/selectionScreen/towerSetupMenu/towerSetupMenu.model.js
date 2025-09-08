import { context } from "../../../animate.js";
import { gameVariable } from "../../../gameVariable.js";
import { initTowerStats } from "../../building/tower/initTowerStats.js";
import {
  closeArrow,
  leftArrow,
  rightArrow,
} from "../../icon/arrowIcon/arrowIcon.instance.js";
import { equippedTowersIcon } from "../../icon/buildSpotMenuIcon/buildSpotMenuIcon.instance.js";
import {
  openTowerSetupMenuIcon,
  firstStepIcon,
} from "../../icon/dashboardIcons/dashboardIcons.instance.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  wizardTowerAvailableIcon,
} from "../../icon/towerSetupMenu/availableTowerIcon/availableTowerIcon.instance.js";
import {
  damageStatIcon,
  rangeStatIcon,
  rateStatIcon,
} from "../../icon/towerSetupMenu/statIcons/statIcons.instance.js";
import {
  archerDetailsIcon,
  barrackDetailsIcon,
  cannonDetailsIcon,
  fireDetailsIcon,
  groundDetailsIcon,
  wizardDetailsIcon,
} from "../../icon/towerSetupMenu/towerDetailsIcon/towerDetailsIcon.instance.js";
import { buildSpotMenu, dashboard } from "../selectionScreen.instance.js";
import { SelectionScreen } from "../selectionScreen.model.js";

export class TowerSetupMenu extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);

    this.availableTowerIcons = [];
    this.arrowIcons = [];
    this.towerDetailsIcons = [];
    this.equippedTowersIcon = null;
    this.floatingIcon = null;
    this.hasChosenTowers = false;
    this.isOpen = false;
    this.isGhostedMod = false;
    this.currentTowerIndex = 0;
  }

  startTowerStatsAnimation() {
    this.towerDetailsIcons.forEach((icon) => {
      icon.animateBars();
    });
  }

  open(icon) {
    icon.isActivated = true;

    setTimeout(() => {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        initTowerStats({
          archerDetailsIcon,
          wizardDetailsIcon,
          cannonDetailsIcon,
          groundDetailsIcon,
          barrackDetailsIcon,
          fireDetailsIcon,
        });

        this.equippedTowersIcon = equippedTowersIcon;

        gameVariable.game.selectionScreenList.push(this, buildSpotMenu);
        this.arrowIcons.push(leftArrow, rightArrow, closeArrow);
        this.availableTowerIcons.push(
          archerTowerAvailableIcon,
          wizardTowerAvailableIcon,
          cannonTowerAvailableIcon,
          groundTowerAvailableIcon,
          barrackTowerAvailableIcon,
          fireTowerAvailableIcon
        );

        this.towerDetailsIcons.push(
          archerDetailsIcon,
          wizardDetailsIcon,
          cannonDetailsIcon,
          groundDetailsIcon,
          barrackDetailsIcon,
          fireDetailsIcon
        );

        this.towerDetailsIcons.forEach((charaIcon) => {
          charaIcon.icons.push(damageStatIcon, rateStatIcon, rangeStatIcon);
        });

        this.startTowerStatsAnimation();
        this.hideOpenMenuIcon();
      } else {
        this.close(icon);
      }
    }, 300);
  }

  close(icon) {
    icon.isActivated = true;
    setTimeout(() => {
      this.isOpen = !this.isOpen;

      if (!this.isOpen) {
        gameVariable.game.selectionScreenList =
          gameVariable.game.selectionScreenList.filter(
            (screen) => screen.name === "dashboard"
          );

        dashboard.icons.push(openTowerSetupMenuIcon, firstStepIcon);
        this.arrowIcons = [];
        this.availableTowerIcons = [];
        this.towerDetailsIcons = [];
      }
      this.resetBuildSpotMenuAnimation();
    }, 350);
  }

  hideOpenMenuIcon() {
    dashboard.icons = [];
  }

  resetBuildSpotMenuAnimation() {
    buildSpotMenu.scale = 0.3;
  }

  drawOverlay() {
    context.save();
    context.fillStyle = "rgba(0, 0, 0, 0.15)";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.restore();
  }
}
