import { gameVariable } from "../../../gameVariable.js";
import { isHovering, x, y } from "../../../shared/utils.js";

export const iconHover = (iconList) => {
  for (const icon of iconList) {
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
      gameVariable.ui.isHovering = true;
      icon.isHovering = true;
      canvas.style.cursor = "pointer";
      break;
    } else {
      gameVariable.ui.isHovering = false;
      icon.isHovering = false;
      canvas.style.cursor = "default";
    }
  }
};
