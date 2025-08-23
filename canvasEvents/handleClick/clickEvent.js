import { canvas } from "../../../../animate.js";
import { mouseDetect } from "../../../../shared/utils.js";
import {
  battleIconList,
  towerSetupMenuIcons,
} from "./clickHandlers/handleIconClick.js";
import { dashboardIconList } from "./clickHandlers/handleDashboaredClick.js";
import { buildSpotList } from "./clickHandlers/handleBuildSpotClick.js";
import { levelIconList } from "./clickHandlers/handleDifficultyScreenClick.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  levelIconList();
  towerSetupMenuIcons();
  dashboardIconList();
  battleIconList();
  buildSpotList();
};
