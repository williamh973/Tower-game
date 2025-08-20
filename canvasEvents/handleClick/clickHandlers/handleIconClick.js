import { isHovering, x, y } from "../../../shared/utils.js";
import { gameVariable } from "../../../../../../gameVariable.js";
import { closeTowerSetupMenu } from "../../../menus/towerSetupMenu/towerSetupMenu.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "../../../../../../menus/towerSetupMenu/handleCarouselSteps.js";
import { initWave } from "../../../spawnHandle/campaign/step/wave/wave.js";
import { togglePause } from "../../../../../../gamePauseHandle.js";
import {
  dashboard,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";

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
      switch (icon.name) {
        case "closeArrow":
          closeTowerSetupMenu(icon);
          break;
        case "rightArrow":
          availableTowerMenuNextStep(icon);
          break;
        case "leftArrow":
          availableTowerMenuPrevStep(icon);
          break;
        default:
          break;
      }
    }
  }
};

export const battleIconList = async () => {
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
};
