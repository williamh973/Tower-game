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
} from "../../models/icon/availableTowersMenu/availableTowersMenuIcons.instance.js";
import { stepOneIcon } from "../../models/icon/campaignStep/campaignStepIcon.instance.js";
import {
  availableTowerMenu,
  buildSpotMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";

export const openAvailableTowerMenu = (openMenuIcon) => {
  openMenuIcon.isActivated = true;
  setTimeout(() => {
    gameVariable.preparation.isAvailableTowersMenuOpen =
      !gameVariable.preparation.isAvailableTowersMenuOpen;

    if (gameVariable.preparation.isAvailableTowersMenuOpen) {
      gameVariable.ui.selectionScreenList.push(
        availableTowerMenu,
        buildSpotMenu
      );
      gameVariable.ui.arrowIconList.push(leftArrow, rightArrow, closeArrow);
      gameVariable.preparation.availableTowerList.push(
        archerTowerAvailableIcon,
        wizardTowerAvailableIcon,
        cannonTowerAvailableIcon,
        groundTowerAvailableIcon,
        barrackTowerAvailableIcon,
        fireTowerAvailableIcon
      );

      hideOpenMenuIcon();
    } else {
      closeAvailableTowerMenu();
    }
  }, 300);
};

const hideOpenMenuIcon = () => {
  gameVariable.campaign.dashboardIconList = [];
};

export const closeAvailableTowerMenu = (icon) => {
  icon.isActivated = true;
  setTimeout(() => {
    gameVariable.preparation.isAvailableTowersMenuOpen =
      !gameVariable.preparation.isAvailableTowersMenuOpen;

    if (!gameVariable.preparation.isAvailableTowersMenuOpen) {
      gameVariable.ui.selectionScreenList =
        gameVariable.ui.selectionScreenList.filter(
          (screen) => screen.name === "campaignDashboard"
        );

      gameVariable.ui.arrowIconList = [];
      gameVariable.campaign.dashboardIconList.push(
        openAvailableTowerMenuIcon,
        stepOneIcon
      );
      gameVariable.preparation.availableTowerList = [];
    }
  }, 350);
};
