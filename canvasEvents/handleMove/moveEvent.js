import { canvas } from "../../../../animate.js";
import { canvasManager } from "../../animate.js";
import {
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";
import { mouseDetect } from "../../shared/utils.js";
import { iconHover } from "./moveHandlers/handleIconHover.js";

canvas.addEventListener("mousemove", (event) => {
  mouseDetect(event);

  canvasManager.isHovering = false;

  iconHover(towerSetupMenu.arrowIcons);
  iconHover(levelDifficultyMenu.icons);

  if (dashboard.map) {
    iconHover(dashboard.map.icons);
    iconHover(dashboard.map.buildSpots);
  }
  iconHover(towerSetupMenu.availableTowerIcons);
  iconHover(dashboard.icons);
});
