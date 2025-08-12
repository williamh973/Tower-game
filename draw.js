import { context } from "./animate.js";
import { gameVariable } from "./gameVariable.js";
import { drawDebugCollisionSquare } from "./shared/methodsUtils.js";

export const draw = () => {
  gameVariable.ui.selectionScreenList.forEach((screen) => {
    screen.draw();

    if (screen.name === "buildSpotMenu") {
      screen.buildMenuSlots.forEach((slot) => {
        slot.draw();
        drawDebugCollisionSquare(slot, context);
      });
    }
  });

  gameVariable.ui.iconList.forEach((icon) => {
    icon.draw();
  });

  if (gameVariable.preparation.isAvailableTowersMenuOpen) {
    const index = gameVariable.preparation.currentTowerIndex;
    const currentIcon = gameVariable.preparation.availableTowerList[index];
    gameVariable.preparation.availableTowerList.forEach(() => {
      currentIcon.draw();
    });
  }

  gameVariable.tower.buildSpotList.forEach((spot) => {
    spot.draw();
  });

  gameVariable.tower.buildSpotMenuSlotList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
    drawDebugCollisionSquare(buildSpotIcon, context);
  });
};
