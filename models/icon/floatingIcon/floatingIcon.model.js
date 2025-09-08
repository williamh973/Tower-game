import { context } from "../../../animate.js";
import { Icon } from "../icon.model.js";

export class FloatingIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
    text,
    name
  ) {
    super(x, y, image, backgroundColor, width, height, isClickable, text, name);
    this.opacity = 1;
    this.riseSpeed = 0.2;
    this.fadeSpeed = 0.01;
    this.isFinished = false;
  }

  update() {
    this.updateAnimation();
    this.draw();
  }

  updateAnimation() {
    console.time("time start");
    const icons = ["goldRewardDisplay", "toast"];
    if (icons.includes(this.name)) {
      this.position.y -= this.riseSpeed;
      if (this.opacity > 0) {
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
          this.opacity = 0;
          this.isFinished = true;
          console.timeEnd("time up");
        }
      }
    }
  }

  draw() {
    context.save();
    context.globalAlpha = this.opacity;

    if (this.image) {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }

    if (this.text) {
      context.fillStyle = "whitesmoke";
      context.font = "bold 17px serif";
      context.fillText(this.text, this.position.x, this.position.y);
    }

    context.restore();
  }
}
