import { context } from "../../animate.js";

export class BuildSpot {
  constructor(position) {
    this.position = position;
    this.width = 40;
    this.height = 40;
    this.isOccupied = false;
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
