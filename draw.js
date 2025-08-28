import { gameVariable } from "./gameVariable.js";
import {
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "./models/selectionScreen/selectionScreen.instance.js";

export const draw = () => {
  gameVariable.game.selectionScreenList.forEach((screen) => {
    screen.draw();

    if (screen.name === "buildSpotMenu") {
      screen.slots.forEach((slot) => {
        slot.draw();

        if (slot.isGhostTowerPlaced) {
          slot.content.draw();
        }
      });
    }
  });

  dashboard.icons.forEach((icon) => {
    icon.draw();
  });

  levelDifficultyMenu.icons.forEach((icon) => {
    icon.draw();
  });

  towerSetupMenu.arrowIcons.forEach((icon) => {
    icon.draw();
  });

  if (towerSetupMenu.isTowerSetupMenuOpen) {
    towerSetupMenu.equippedTowersIcon.draw();
  }

  if (dashboard.map) {
    dashboard.map.icons.forEach((icon) => {
      icon.draw();
    });
  }

  if (towerSetupMenu.isTowerSetupMenuOpen) {
    const index = towerSetupMenu.currentTowerIndex;
    const currentCharaIcon = towerSetupMenu.towerCharacteristicsIcons[index];

    towerSetupMenu.towerCharacteristicsIcons.forEach(() => {
      currentCharaIcon.draw();
    });

    const currentAvailableIcon = towerSetupMenu.availableTowerIcons[index];

    towerSetupMenu.availableTowerIcons.forEach(() => {
      currentAvailableIcon.draw();

      if (currentAvailableIcon.ghostIcon) {
        currentAvailableIcon.ghostIcon.draw();
      }
    });
  }

  gameVariable.battle.buildSpotList.forEach((spot) => {
    spot.draw();
  });

  towerSetupMenu.towerCharacteristicsIcons.forEach((charaIcon) => {
    charaIcon.icons.forEach((statIcon) => {
      statIcon.draw();
    });
  });
};
