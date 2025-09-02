import { gameVariable } from "./gameVariable.js";
import {
  buildSpotMenu,
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
  });

  wave.demonList.forEach((demon) => {
    demon.update();
  });

  buildSpotMenu.slots.forEach((slot) => {
    if (slot.tower) {
      slot.tower.projectiles.forEach((projectile) => {
        projectile.update();
      });
    }
  });

  dashboard.icons.forEach((icon) => {
    if (icon.isActivated) {
      icon.updateAnimation();
    }
  });

  if (towerSetupMenu.isOpen) {
    towerSetupMenu.arrowIcons.forEach((icon) => {
      icon.updateAnimation();
    });

    towerSetupMenu.availableTowerIcons.forEach((icon) => {
      icon.updateAnimation();
      icon.height = 100;
    });
  }

  const foundBuildSpotMenu = gameVariable.game.selectionScreenList.find(
    (selectionScreen) => selectionScreen.name === "buildSpotMenu"
  );

  if (towerSetupMenu.isOpen && foundBuildSpotMenu) {
    foundBuildSpotMenu.openedAnimation();
  }

  for (let i = gameVariable.ui.floatingIconList.length - 1; i >= 0; i--) {
    const icon = gameVariable.ui.floatingIconList[i];
    icon.update();

    if (icon.finished) {
      gameVariable.ui.floatingIconList.splice(i, 1);
    }
  }
};
