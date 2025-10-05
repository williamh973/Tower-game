import { context } from "./animate.js";
import { gameVariable } from "./gameVariable.js";
import {
  buildSpotMenu,
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";
import { drawDebugCollisionSquare } from "./shared/utils.js";

const drawBuildSpotMenu = () => {
  buildSpotMenu.draw();
  buildSpotMenu.slots.forEach((slot) => {
    if (buildSpotMenu.scale === 1) slot.draw();
    if (slot.isGhostTowerPlaced) slot.content.draw();
  });
};

export const draw = () => {
  gameVariable.game.selectionScreens.forEach((screen) => {
    screen.draw();
  });

  dashboard.icons.forEach((icon) => {
    icon.draw();
  });

  levelDifficultyMenu.icons.forEach((icon) => {
    icon.draw();
  });

  if (dashboard.map) {
    dashboard.map.draw();
    dashboard.map.icons.forEach((icon) => {
      icon.draw();
    });

    dashboard.map.buildSpots.forEach((spot) => {
      spot.draw();
    });

    if (!towerSetupMenu.isOpen && buildSpotMenu.isOpen) drawBuildSpotMenu();
  }

  if (towerSetupMenu.isOpen) {
    const index = towerSetupMenu.currentTowerIndex;
    const currentCharaIcon = towerSetupMenu.towerDetailsIcons[index];
    const currentAvailableIcon = towerSetupMenu.availableTowerIcons[index];

    drawBuildSpotMenu();

    towerSetupMenu.towerDetailsIcons.forEach(() => {
      currentCharaIcon.draw();
    });

    towerSetupMenu.arrowIcons.forEach((icon) => {
      icon.draw();
    });

    towerSetupMenu.towerDetailsIcons.forEach((charaIcon) => {
      charaIcon.icons.forEach((statIcon) => {
        statIcon.draw();
      });
    });

    towerSetupMenu.equippedTowersIcon.draw();

    towerSetupMenu.availableTowerIcons.forEach(() => {
      currentAvailableIcon.draw();

      if (towerSetupMenu.isGhostedMod) {
        towerSetupMenu.drawOverlay();
        buildSpotMenu.slots.forEach((slot) => slot.draw());
      }

      if (currentAvailableIcon.ghostIcon) currentAvailableIcon.ghostIcon.draw();
    });
  }
};
