import { Icon } from "../../icon.model.js";

export class AvailableTowerIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    text = "",
    name = ""
  ) {
    super(
      x,
      y,
      image,
      backgroundColor,
      width,
      height,
      true,
      (text = ""),
      (name = "")
    );

    this.ghostIcon = null;
    this.tower = null;
  }

  ghostIconInitialPosition(ghostIcon, availableTowerIcon) {
    ghostIcon.position.x = availableTowerIcon.position.x;
    ghostIcon.position.y = availableTowerIcon.position.y;
  }
}
