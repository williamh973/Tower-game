import { canvas } from "../../../../animate.js";
import { mouseDetect } from "../../../../shared/utils.js";
import {
  battleIconList,
  towerSetupMenuIcons,
} from "./clickHandlers/handleIconClick.js";
import { dashboardIcons } from "./clickHandlers/handleDashboaredClick.js";
import { buildSpots } from "./clickHandlers/handleBuildSpotClick.js";
import { levelIconList } from "./clickHandlers/handleDifficultyScreenClick.js";
import { dashboard } from "../../models/selectionScreen/selectionScreen.instance.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  levelIconList();
  towerSetupMenuIcons();
  dashboardIcons();
  battleIconList();

  if (dashboard.map) {
    buildSpots();
  }
};
