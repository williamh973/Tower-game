import { game } from "./gameVariable.js";
import {
  dashboard,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";

export const update = (timestamp) => {
  game.player.placedTowers.forEach((tower) => tower.update(timestamp));

  dashboard.map?.currentWave.demons.forEach((demon) => demon.update());

  // dashboard.map?.activeDemons.forEach((demon) => demon.update());

  game.player.placedTowers.forEach((tower) => {
    if (tower) {
      tower.projectiles.forEach((projectile) => projectile.update());
    }
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

  const foundBuildSpotMenu = game.selectionScreens.find(
    (selectionScreen) => selectionScreen.name === "buildSpotMenu"
  );
  if (foundBuildSpotMenu) foundBuildSpotMenu.toggleAnimate();

  if (game.toast) {
    game.toast.update();

    if (game.toast.isFinished) game.toast = null;
  }
};
