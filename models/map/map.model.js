import { canvasManager } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { buildSpotPositions } from "../../shared/utils.js";
import { wave } from "../../spawnHandle/campaign/step/checkCampaignStep.js";
import { BuildSpot } from "../buildSpot/buildSpot.model.js";
import {
  goldCoinIcon,
  goldHudMask,
  lifeHudMask,
  pauseDisplay,
  startWaveIcon,
  waveHudMask,
} from "../icon/mapIcons/mapIcons.instance.js";
import { dashboard } from "../selectionScreen/selectionScreen.instance.js";

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
    this.buildSpots = [];

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

  initWave(numberOfWave) {
    for (let i = 0; i < numberOfWave; i++) {
      this.waveList.push(wave);
    }
  }

  spawnIcons() {
    this.icons.push(
      startWaveIcon,
      lifeHudMask,
      goldHudMask,
      waveHudMask,
      pauseDisplay,
      goldCoinIcon
    );
  }

  initBuildSpot() {
    const stepKey =
      Object.keys(buildSpotPositions)[dashboard.campaignCurrentStep - 1];
    if (stepKey) {
      this.spawnBuildSpot(buildSpotPositions[stepKey]);
    }
  }

  spawnBuildSpot = (positions) => {
    positions.forEach((pos) => {
      this.buildSpots.push(new BuildSpot(pos));
    });
  };

  initHUDText() {
    lifeHudMask.text = "❤️ " + gameVariable.game.player.life;
    goldHudMask.text = "🪙 " + gameVariable.game.player.gold;
    waveHudMask.text =
      "🧟 VAGUES " + this.currentWaveList.length + "/" + this.waveList.length;

    pauseDisplay.text = gameVariable.game.isPaused ? "▶" : "❚❚";
  }
}
