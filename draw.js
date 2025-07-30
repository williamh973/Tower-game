import { gameVariable } from "./gameVariable.js";

export const draw = () => {
  gameVariable.ui.selectionScreenList.forEach((screen) => {
    screen.draw();
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

  gameVariable.tower.buildSpotIconList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
    // buildSpotIcon.drawDebugCollisionSquare();
  });
};
