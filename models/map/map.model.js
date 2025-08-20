import { canvasManager } from "../../animate.js";
import { wave } from "../../spawnHandle/campaign/step/checkCampaignStep.js";

export class Map {
  constructor(image, numberOfWave) {
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = canvasManager.width;
    this.height = canvasManager.height;
    this.image = image;
    this.waveList = [];
    this.maxWaveList = [];
    this.currentWaveList = [];
    this.icons = [];

    this.initWave(numberOfWave);
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

  initWave(numberOfWave) {
    for (let i = 0; i < numberOfWave; i++) {
      this.waveList.push(wave);
    }
  }
}
