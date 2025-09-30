import { gameVariable } from "./gameVariable.js";
import {
  buildSpotMenu,
  dashboard,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";

export const update = (timestamp) => {
  gameVariable.tower.placedTowerList.forEach((tower) =>
    tower.update(timestamp)
  );

  if (dashboard.map?.currentWave.length > 0) {
    dashboard.map.currentWave.filter((wave) => {
      if (!wave.isWaveEnded) {
        wave.demons?.forEach((demon) => demon.update());
      }
    });
  }

  buildSpotMenu.slots.forEach((slot) => {
    if (slot.tower)
      slot.tower.projectiles.forEach((projectile) => projectile.update());
  });

  dashboard.icons.forEach((icon) => {
    if (icon.isActivated) icon.updateAnimation();
  });

  if (dashboard.map) {
    const startWaveIcon = dashboard.map?.icons.find(
      (icon) => icon.name === "startWaveIcon"
    );
    startWaveIcon.updateAnimation();
  }

  if (towerSetupMenu.isOpen) {
    towerSetupMenu.availableTowerIcons.forEach((icon) => {
      icon.updateAnimation();
      icon.height = 100;
    });

    towerSetupMenu.arrowIcons.forEach((icon) => {
      icon.updateAnimation();
    });
  }

  const foundBuildSpotMenu = gameVariable.game.selectionScreens.find(
    (selectionScreen) => selectionScreen.name === "buildSpotMenu"
  );

  if (towerSetupMenu.isOpen || (buildSpotMenu.isOpen && foundBuildSpotMenu)) {
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
