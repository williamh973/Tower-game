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
import {
  availableTowerMenu,
  buildSpotMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";

export const openAvailableTowerMenu = (openMenuIcon) => {
  gameVariable.preparation.isAvailableTowersMenuOpen =
    !gameVariable.preparation.isAvailableTowersMenuOpen;

  if (gameVariable.preparation.isAvailableTowersMenuOpen) {
    gameVariable.ui.selectionScreenList.push(availableTowerMenu, buildSpotMenu);
    gameVariable.ui.iconList.push(leftArrow, rightArrow, closeArrow);
    gameVariable.preparation.availableTowerList.push(
      archerTowerAvailableIcon,
      wizardTowerAvailableIcon,
      cannonTowerAvailableIcon,
      groundTowerAvailableIcon,
      barrackTowerAvailableIcon,
      fireTowerAvailableIcon
    );

    hideOpenMenuIcon(openMenuIcon);
  } else {
    closeAvailableTowerMenu();
  }
};

const hideOpenMenuIcon = (openMenuIcon) => {
  gameVariable.ui.iconList = gameVariable.ui.iconList.filter(
    (icon) => icon.name !== openMenuIcon.name
  );
};

export const closeAvailableTowerMenu = () => {
  gameVariable.preparation.isAvailableTowersMenuOpen =
    !gameVariable.preparation.isAvailableTowersMenuOpen;

  if (!gameVariable.preparation.isAvailableTowersMenuOpen) {
    gameVariable.ui.selectionScreenList =
      gameVariable.ui.selectionScreenList.filter(
        (screen) => screen.name === "campaignDashboard"
      );

    gameVariable.ui.iconList.push(openAvailableTowerMenuIcon);
    gameVariable.ui.iconList = gameVariable.ui.iconList.filter(
      (icon) => icon.name === "openAvailableTowerMenu"
    );

    gameVariable.preparation.availableTowerList = [];
  }
};
