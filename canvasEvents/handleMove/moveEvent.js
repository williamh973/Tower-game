import { canvas } from "../../../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { dashboard } from "../../models/selectionScreen/selectionScreen.instance.js";
import { mouseDetect } from "../../shared/utils.js";
import { iconHover } from "./moveHandlers/handleIconHover.js";

canvas.addEventListener("mousemove", (event) => {
  mouseDetect(event);

  gameVariable.ui.isHovering = false;

  iconHover(gameVariable.ui.arrowIconList);
  iconHover(gameVariable.ui.levelIconList);
  iconHover(gameVariable.battle.battleIconList);
  iconHover(gameVariable.preparation.availableTowerList);
  iconHover(dashboard.icons);
});
