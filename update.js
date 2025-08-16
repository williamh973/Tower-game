import { gameVariable } from "./gameVariable.js";
import { wave } from "./spawnHandle/campaign/step/checkCampaignStep.js";

export const update = (timestamp) => {
  gameVariable.campaign.mapList.forEach((map) => {
    map.update();
  });

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

  gameVariable.campaign.dashboardIconList.forEach((icon) => {
    icon.updateAnimation();
  });

  gameVariable.ui.arrowIconList.forEach((icon) => {
    icon.updateAnimation();
  });

  gameVariable.preparation.availableTowerList.forEach((icon) => {
    icon.updateAnimation();
    icon.height = 100;
  });

  gameVariable.ui.floatingIconList.forEach((icon) => {
    icon.updateAnimation();
  });

  gameVariable.ui.selectionScreenList.forEach((selectionScreen) => {
    if (gameVariable.ui.isBuildSpotMenuOpen) {
      selectionScreen.updateAnimation();
    }
  });

  for (let i = gameVariable.ui.floatingIconList.length - 1; i >= 0; i--) {
    const icon = gameVariable.ui.floatingIconList[i];
    icon.update();

    if (icon.finished) {
      gameVariable.ui.floatingIconList.splice(i, 1);
    }
  }
};
