import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "../../../models/building/building.instance.js";
import {
  buildSpotMenu,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";

export const ghostMod = (selectedIcon) => {
  selectedIcon.isClickable = true;

  switch (towerSetupMenu.currentTowerIndex) {
    case 0:
      buildSpotMenu.activateGhostMod(archerTower, selectedIcon);
      break;
    case 1:
      buildSpotMenu.activateGhostMod(wizardTower, selectedIcon);
      break;
    case 2:
      buildSpotMenu.activateGhostMod(cannonTower, selectedIcon);
      break;
    case 3:
      buildSpotMenu.activateGhostMod(groundTower, selectedIcon);
      break;
    case 4:
      buildSpotMenu.activateGhostMod(barrackTower, selectedIcon);
      break;
    case 5:
      buildSpotMenu.activateGhostMod(fireTower, selectedIcon);
      break;
    default:
      break;
  }
};
