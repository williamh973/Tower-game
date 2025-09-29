import { canvasManager } from "../../../animate.js";
import { isHovering, x, y } from "../../../shared/utils.js";

export const iconHover = (icons) => {
  for (const icon of icons) {
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
      canvasManager.isHovering = true;
      icon.isHovering = true;

      canvas.style.cursor = "pointer";
      break;
    } else {
      canvasManager.isHovering = false;
      icon.isHovering = false;
      canvas.style.cursor = "default";
    }
  }
};
