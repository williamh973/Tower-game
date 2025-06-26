import { context } from "../../animate.js";

export class SelectionScreen {
  constructor(position, image, width, height) {
    this.position = position;
    this.image = image;
    this.width = width;
    this.height = height;
  }
  draw() {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  isClicked(mouseX, mouseY) {
    return (
      mouseX >= this.position.x &&
      mouseX <= this.position.x + this.width &&
      mouseY >= this.position.y &&
      mouseY <= this.position.y + this.height
    );
  }
}
