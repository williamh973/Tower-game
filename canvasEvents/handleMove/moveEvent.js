import { canvas } from "../../../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import {
  dashboard,
  levelDifficultyMenu,
  towerSetupMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";
import { mouseDetect } from "../../shared/utils.js";
import { iconHover } from "./moveHandlers/handleIconHover.js";

canvas.addEventListener("mousemove", (event) => {
  mouseDetect(event);

  gameVariable.ui.isHovering = false;

  iconHover(towerSetupMenu.arrowIcons);
  iconHover(levelDifficultyMenu.icons);

  if (dashboard.map) {
    iconHover(dashboard.map.icons);
  }
  iconHover(towerSetupMenu.availableTowerIcons);
  iconHover(dashboard.icons);
});
