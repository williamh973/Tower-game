import { context } from "../../animate.js";

export class BuildSpot {
  constructor(position) {
    this.position = position;
    this.width = 30;
    this.height = 30;
    this.isOccupied = false;
    this.tower = null;
  }

  draw() {
    context.fillStyle = "transparent";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  isClicked(mouseX, mouseY) {
    return (
      mouseX >= this.position.x &&
      mouseX <= this.position.x + this.width &&
      mouseY >= this.position.y &&
      mouseY <= this.position.y + this.height
    );
  }

  build(tower) {
    if (!this.isOccupied) {
      this.tower = tower;
      this.isOccupied = true;
    }
  }

  drawDebugCollisionSquare() {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 1;

    context.rect(this.position.x, this.position.y, this.width, this.height);

    context.stroke();
    context.closePath();
  }
}
