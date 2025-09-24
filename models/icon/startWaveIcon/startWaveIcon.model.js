import { Icon } from "../icon.model.js";

export class StartWaveIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
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
      isClickable,
      (text = ""),
      (name = "")
    );
  }

  async init(startWaveIcon) {
    await fetchWaypoints();
    wave.start(startWaveIcon);
    this.hidden();
  }

  hidden() {
    return (this.isVisible = false);
  }

  show() {
    return (this.isVisible = true);
  }
}
