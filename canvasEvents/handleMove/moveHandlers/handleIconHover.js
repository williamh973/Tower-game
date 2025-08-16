import { gameVariable } from "../../../gameVariable.js";
import { Tooltips } from "../../../models/tooltips.model.js";
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
      if (icon.isHovering) {
        let tooltips = new Tooltips(
          {
            x: 0,
            y: 0,
          },
          ""
        );
      }
      canvas.style.cursor = "pointer";
      break;
    } else {
      gameVariable.ui.isHovering = false;
      icon.isHovering = false;
      canvas.style.cursor = "default";
    }
  }
};
