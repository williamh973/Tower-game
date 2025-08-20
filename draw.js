import { gameVariable } from "./gameVariable.js";
import {
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";
import { drawDebugCollisionSquare } from "./shared/utils.js";

export const draw = () => {
  gameVariable.game.selectionScreenList.forEach((screen) => {
    screen.draw();

    if (screen.name === "buildSpotMenu") {
      screen.buildMenuSlots.forEach((slot) => {
        slot.draw();

        if (slot.isGhostTowerPlaced) {
          slot.towerIcon.draw();
        }
      });
    }
  });

  dashboard.icons.forEach((icon) => {
    icon.draw();
  });

  levelDifficultyMenu.icons.forEach((icon) => {
    icon.draw();
  });

  towerSetupMenu.arrowIcons.forEach((icon) => {
    icon.draw();
  });

  gameVariable.battle.battleIconList.forEach((icon) => {
    icon.draw();
  });

  if (towerSetupMenu.isTowerSetupMenuOpen) {
    const index = towerSetupMenu.currentTowerIndex;
    const currentIcon = towerSetupMenu.availableTowerIcons[index];
    towerSetupMenu.availableTowerIcons.forEach(() => {
      currentIcon.draw();

      if (currentIcon.ghostTowerIcon) {
        currentIcon.ghostTowerIcon.draw();
      }
    });
  }

  gameVariable.battle.buildSpotList.forEach((spot) => {
    spot.draw();
  });
};
