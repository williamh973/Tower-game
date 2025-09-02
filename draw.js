import { gameVariable } from "./gameVariable.js";
import {
  buildSpotMenu,
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

  if (dashboard.map) {
    dashboard.map.icons.forEach((icon) => {
      icon.draw();
    });
  }

  if (towerSetupMenu.isOpen) {
    const index = towerSetupMenu.currentTowerIndex;
    const currentCharaIcon = towerSetupMenu.towerDetailsIcons[index];
    const currentAvailableIcon = towerSetupMenu.availableTowerIcons[index];

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
        currentAvailableIcon.drawOverlay(buildSpotMenu.slots);
        buildSpotMenu.slots.forEach((slot) => slot.draw());
      }

      if (currentAvailableIcon.ghostIcon) {
        currentAvailableIcon.ghostIcon.draw();
      }
    });
  }

  gameVariable.battle.buildSpotList.forEach((spot) => {
    spot.draw();
  });
};
