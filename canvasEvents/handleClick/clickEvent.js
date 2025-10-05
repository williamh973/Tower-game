import { canvas } from "../../../../animate.js";
import { mouseDetect } from "../../../../shared/utils.js";
import {
  mapIcons,
  towerSetupMenuIcons,
} from "./clickHandlers/handleIconClick.js";
import { dashboardIcons } from "./clickHandlers/handleDashboaredClick.js";
import { levelIcons } from "./clickHandlers/handleDifficultyScreenClick.js";
import { buildSpotMenuSlots } from "./clickHandlers/handleBuildSpotMenuSlotsClick.js";
import { towerSetupMenu } from "../../models/selectionScreen/selectionScreen.instance.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  let selectedIcon =
    towerSetupMenu.availableTowerIcons[towerSetupMenu.currentTowerIndex];

  levelIcons();
  towerSetupMenuIcons(selectedIcon);
  dashboardIcons();
  mapIcons();
  buildSpotMenuSlots(selectedIcon);
};
