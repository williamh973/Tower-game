import { context } from "./animate.js";
import { gameVariable } from "./gameVariable.js";
import { drawDebugCollisionSquare } from "./shared/utils.js";

export const draw = () => {
  gameVariable.ui.selectionScreenList.forEach((screen) => {
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
  gameVariable.campaign.dashboardIconList.forEach((icon) => {
    icon.draw();
  });

  gameVariable.ui.levelIconList.forEach((icon) => {
    icon.draw();
  });

  gameVariable.ui.arrowIconList.forEach((icon) => {
    icon.draw();
  });

  gameVariable.battle.battleIconList.forEach((icon) => {
    icon.draw();
  });

  if (gameVariable.preparation.isAvailableTowersMenuOpen) {
    const index = gameVariable.preparation.currentTowerIndex;
    const currentIcon = gameVariable.preparation.availableTowerList[index];
    gameVariable.preparation.availableTowerList.forEach(() => {
      currentIcon.draw();
    });
  }

  gameVariable.battle.buildSpotList.forEach((spot) => {
    spot.draw();
  });

  gameVariable.tower.buildSpotMenuSlotList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
    drawDebugCollisionSquare(buildSpotIcon, context);
  });
};
