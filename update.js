import { gameVariable } from "./gameVariable.js";
import {
  buildSpotMenu,
  dashboard,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";
import { wave } from "./spawnHandle/campaign/step/checkCampaignStep.js";

export const update = (timestamp) => {
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
    towerSetupMenu.availableTowerIcons.forEach((icon) => {
      icon.updateAnimation();
      icon.height = 100;
    });

    towerSetupMenu.arrowIcons.forEach((icon) => {
      icon.updateAnimation();
    });
  }

  const foundBuildSpotMenu = gameVariable.game.selectionScreenList.find(
    (selectionScreen) => selectionScreen.name === "buildSpotMenu"
  );

  if (towerSetupMenu.isOpen && foundBuildSpotMenu) {
    foundBuildSpotMenu.openedAnimation();
  }

  if (towerSetupMenu.floatingIcon) {
    towerSetupMenu.floatingIcon;
    towerSetupMenu.floatingIcon.update();

    if (towerSetupMenu.floatingIcon.isFinished) {
      towerSetupMenu.floatingIcon = null;
    }
  }
};
