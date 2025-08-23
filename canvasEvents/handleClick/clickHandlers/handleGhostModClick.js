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
      selectedIcon.activateGhostMod(archerTower);
      break;
    case 1:
      selectedIcon.activateGhostMod(wizardTower);
      break;
    case 2:
      selectedIcon.activateGhostMod(cannonTower);
      break;
    case 3:
      selectedIcon.activateGhostMod(groundTower);
      break;
    case 4:
      selectedIcon.activateGhostMod(barrackTower);
      break;
    case 5:
      selectedIcon.activateGhostMod(fireTower);
      break;
    default:
      break;
  }
};
