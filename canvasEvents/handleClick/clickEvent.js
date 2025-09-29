import { canvas } from "../../../../animate.js";
import { mouseDetect } from "../../../../shared/utils.js";
import {
  mapIcons,
  towerSetupMenuIcons,
} from "./clickHandlers/handleIconClick.js";
import { dashboardIcons } from "./clickHandlers/handleDashboaredClick.js";
import { levelIconList } from "./clickHandlers/handleDifficultyScreenClick.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  levelIconList();
  towerSetupMenuIcons();
  dashboardIcons();
  mapIcons();
};
