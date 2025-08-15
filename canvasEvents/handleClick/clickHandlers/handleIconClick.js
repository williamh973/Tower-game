import { isHovering, x, y } from "../../../shared/utils.js";
import { gameVariable } from "../../../../../../gameVariable.js";
import { closeAvailableTowerMenu } from "../../../menus/availableTowerMenu/availableTowerMenu.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "../../../../../../menus/availableTowerMenu/handleCarouselSteps.js";
import { initWave } from "../../../spawnHandle/campaign/step/wave/wave.js";
import { togglePause } from "../../../../../../gamePauseHandle.js";

export const arrowIconList = () => {
  for (const icon of gameVariable.ui.arrowIconList) {
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
          closeAvailableTowerMenu(icon);
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
  for (const icon of gameVariable.battle.battleIconList) {
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
