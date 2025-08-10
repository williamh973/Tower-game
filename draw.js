import { context } from "./animate.js";
import { gameVariable } from "./gameVariable.js";
import { drawDebugCollisionSquare } from "./shared/methodsUtils.js";

export const draw = () => {
  gameVariable.ui.selectionScreenList.forEach((screen) => {
    screen.draw();
  });

  gameVariable.ui.iconList.forEach((icon) => {
    icon.draw();

    // drawDebugCollisionSquare(icon, context);
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

  gameVariable.tower.buildSpotMenuIconList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
    drawDebugCollisionSquare(buildSpotIcon, context);
  });
};
