import { isHovering, x, y } from "../../../shared/utils.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "../../../../../../menus/towerSetupMenu/handleCarouselSteps.js";
import {
  buildSpotMenu,
  dashboard,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";
import { ghostMod } from "./handleGhostModClick.js";
import {
  pauseIcon,
  startWaveIcon,
} from "../../../models/icon/mapIcons/mapIcons.instance.js";
import { game } from "../../../gameVariable.js";

export const towerSetupMenuIcons = (selectedIcon) => {
  for (const icon of towerSetupMenu.arrowIcons)
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
          towerSetupMenu.close(icon);
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

  if (
    towerSetupMenu.isOpen &&
    isHovering(
      x,
      y,
      selectedIcon.position.x,
      selectedIcon.position.y,
      selectedIcon.width,
      selectedIcon.height
    ) &&
    selectedIcon.isClickable
  )
    ghostMod(selectedIcon);
};

export const mapIcons = async () => {
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
      )
        switch (icon.name) {
          case "startWaveIcon":
            await startWaveIcon.init(icon);
            break;
          case "pauseIcon":
            pauseIcon.toggle();
            break;
          default:
            break;
        }
    }

    for (const spot of dashboard.map.buildSpots) {
      if (
        isHovering(
          x,
          y,
          spot.position.x,
          spot.position.y,
          spot.width,
          spot.height
        ) &&
        !spot.isOccupied &&
        game.player.isCanBuildTower
      ) {
        spot.isClicked = true;
        const buildSpotMenuOpen = false;
        buildSpotMenu.toggle(buildSpotMenuOpen, spot);
      }
    }
  }
};
