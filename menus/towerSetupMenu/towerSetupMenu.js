import { gameVariable } from "../../gameVariable.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  closeArrow,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  leftArrow,
  openAvailableTowerMenuIcon,
  rightArrow,
  wizardTowerAvailableIcon,
} from "../../models/icon/towerSetupMenu/towerSetupMenuIcons.instance.js";
import { stepOneIcon } from "../../models/icon/campaignStep/campaignStepIcon.instance.js";
import {
  towerSetupMenu,
  buildSpotMenu,
  dashboard,
} from "../../models/selectionScreen/selectionScreen.instance.js";

export const openTowerSetupMenu = (openMenuIcon) => {
  openMenuIcon.isActivated = true;
  setTimeout(() => {
    towerSetupMenu.isTowerSetupMenuOpen = !towerSetupMenu.isTowerSetupMenuOpen;

    if (towerSetupMenu.isTowerSetupMenuOpen) {
      gameVariable.game.selectionScreenList.push(towerSetupMenu, buildSpotMenu);
      gameVariable.ui.arrowIconList.push(leftArrow, rightArrow, closeArrow);
      towerSetupMenu.availableTowers.push(
        archerTowerAvailableIcon,
        wizardTowerAvailableIcon,
        cannonTowerAvailableIcon,
        groundTowerAvailableIcon,
        barrackTowerAvailableIcon,
        fireTowerAvailableIcon
      );

      hideOpenMenuIcon();
    } else {
      closeTowerSetupMenu();
    }
  }, 300);
};

const hideOpenMenuIcon = () => {
  dashboard.icons = [];
};

export const closeTowerSetupMenu = (icon) => {
  icon.isActivated = true;
  setTimeout(() => {
    towerSetupMenu.isTowerSetupMenuOpen = !towerSetupMenu.isTowerSetupMenuOpen;

    if (!towerSetupMenu.isTowerSetupMenuOpen) {
      gameVariable.game.selectionScreenList =
        gameVariable.game.selectionScreenList.filter(
          (screen) => screen.name === "dashboard"
        );

      gameVariable.ui.arrowIconList = [];
      dashboard.icons.push(openAvailableTowerMenuIcon, stepOneIcon);
      towerSetupMenu.availableTowers = [];
    }
  }, 350);
};
