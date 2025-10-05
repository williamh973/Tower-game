import { canvas } from "../../../../animate.js";
import { canvasManager } from "../../animate.js";
import {
  buildSpotMenu,
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";
import { mouseDetect } from "../../shared/utils.js";
import { iconHover } from "./moveHandlers/handleIconHover.js";

canvas.addEventListener("mousemove", (event) => {
  mouseDetect(event);

  canvasManager.isHovering = false;

  if (levelDifficultyMenu) iconHover(levelDifficultyMenu.icons);

  if (dashboard) iconHover(dashboard.icons);
  if (dashboard.map) {
    iconHover(dashboard.map.icons);
    iconHover(dashboard.map.buildSpots);
  }
  if (towerSetupMenu) {
    iconHover(towerSetupMenu.arrowIcons);
    iconHover(towerSetupMenu.availableTowerIcons);
  }

  if (dashboard.map && buildSpotMenu.isOpen) iconHover(buildSpotMenu.slots);
});
