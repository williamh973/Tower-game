import { gameVariable } from "./gameVariable.js";
import {
  dashboard,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";
import { wave } from "./spawnHandle/campaign/step/checkCampaignStep.js";

export const update = (timestamp) => {
  if (dashboard.map) {
    dashboard.map.update();
  }

  gameVariable.tower.placedTowerList.forEach((tower) => {
    tower.update(timestamp);
    // tower.drawDebugCollisionSquare();
  });

  wave.demonList.forEach((demon) => {
    demon.update();
  });

  gameVariable.battle.projectileList.forEach((projectile) => {
    projectile.update();
  });

  dashboard.icons.forEach((icon) => {
    icon.updateAnimation();
  });

  gameVariable.ui.arrowIconList.forEach((icon) => {
    icon.updateAnimation();
  });

  towerSetupMenu.availableTowers.forEach((icon) => {
    icon.updateAnimation();
    icon.height = 100;
  });

  gameVariable.ui.floatingIconList.forEach((icon) => {
    icon.updateAnimation();
  });

  gameVariable.game.selectionScreenList.forEach((selectionScreen) => {
    // if (towerSetupMenu.isTowerSetupMenuOpen) {
    //   selectionScreen.updateAnimation();
    // }
  });

  for (let i = gameVariable.ui.floatingIconList.length - 1; i >= 0; i--) {
    const icon = gameVariable.ui.floatingIconList[i];
    icon.update();

    if (icon.finished) {
      gameVariable.ui.floatingIconList.splice(i, 1);
    }
  }
};
