import { mapStepOne } from "../../assets/backImg.asset.js";
import { canvasManager } from "../../animate.js";

export class Map {
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = canvasManager.width;
    this.height = canvasManager.height;
    this.image = mapStepOne;
  }
  draw() {
    canvasManager.context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
  }
}
