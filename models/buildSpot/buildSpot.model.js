import { context } from "../../animate.js";

export class BuildSpot {
  constructor(position) {
    this.position = position;
    this.width = 35;
    this.height = 35;
    this.isOccupied = false;
    this.isClicked = false;
    this.placedTower = null;
  }

  draw() {
    context.fillStyle = "transparent";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  build(tower) {
    if (!this.isOccupied) {
      this.placedTower = tower;
      this.isOccupied = true;
    }
  }
}
