import { isHovering, x, y } from "../../../shared/utils.js";
import { closeTowerSetupMenu } from "../../../menus/towerSetupMenu/towerSetupMenu.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "../../../../../../menus/towerSetupMenu/handleCarouselSteps.js";
import { initWave } from "../../../spawnHandle/campaign/step/wave/wave.js";
import { togglePause } from "../../../../../../gamePauseHandle.js";
import {
  buildSpotMenu,
  dashboard,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";
import { ghostMod } from "./handleGhostModClick.js";

export const towerSetupMenuIcons = () => {
  for (const icon of towerSetupMenu.arrowIcons) {
    if (
      isHovering(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
      const currentIndex = towerSetupMenu.currentTowerIndex;
      switch (icon.name) {
        case "closeArrow":
          closeTowerSetupMenu(icon);
          break;
        case "rightArrow":
          availableTowerMenuNextStep(icon, currentIndex);
          break;
        case "leftArrow":
          availableTowerMenuPrevStep(icon, currentIndex);
          break;
        default:
          break;
      }
      towerSetupMenu.startTowerStatsAnimation();
    }
  }

  let selectedIcon =
    towerSetupMenu.availableTowerIcons[towerSetupMenu.currentTowerIndex];

  if (
    towerSetupMenu.isTowerSetupMenuOpen &&
    isHovering(
      x,
      y,
      selectedIcon.position.x,
      selectedIcon.position.y,
      selectedIcon.width,
      selectedIcon.height
    ) &&
    selectedIcon.isClickable
  ) {
    ghostMod(selectedIcon);
  }

  if (towerSetupMenu.isGhostedMod) {
    for (const slot of buildSpotMenu.slots) {
      if (
        isHovering(
          x,
          y,
          slot.position.x,
          slot.position.y,
          slot.width,
          slot.height
        )
      ) {
        slot.addTowerIconToSlot(
          slot,
          selectedIcon,
          buildSpotMenu.remainingBuildMenuSlots
        );
      }
    }
  }
};

export const battleIconList = async () => {
  if (dashboard.map) {
    for (const icon of dashboard.map.icons) {
      if (
        isHovering(
          x,
          y,
          icon.position.x,
          icon.position.y,
          icon.width,
          icon.height
        )
      ) {
        switch (icon.name) {
          case "startWaveIcon":
            await initWave(icon);
            break;
          case "pauseIcon":
            togglePause(icon);
            break;
          default:
            break;
        }
      }
    }
  }
};
