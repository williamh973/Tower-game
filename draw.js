import { gameVariable } from "./gameVariable.js";

export const draw = () => {
  gameVariable.ui.iconList.forEach((icon) => {
    icon.draw();
  });

  gameVariable.tower.buildSpotList.forEach((spot) => {
    spot.draw();
  });

  gameVariable.ui.selectionScreenList.forEach((screen) => {
    screen.draw();
  });

  gameVariable.ui.buildSpotIconList.forEach((buildSpotIcon) => {
    buildSpotIcon.draw();
  });
};
