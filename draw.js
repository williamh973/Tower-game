import { gameVariable } from "./gameVariable.js";

export const draw = () => {
  gameVariable.ui.selectionScreenList.forEach((screen) => {
    screen.draw();
  });

  gameVariable.ui.iconList.forEach((icon) => {
    icon.draw();
    // icon.drawDebugCollisionSquare();
  });

  gameVariable.tower.buildSpotList.forEach((spot) => {
    spot.draw();
  });

  gameVariable.tower.buildSpotIconList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
    // buildSpotIcon.drawDebugCollisionSquare();
  });
};
