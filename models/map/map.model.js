import { canvasManager } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { buildSpotPositions } from "../../shared/utils.js";
import { ckeckIfPlayerVictory } from "../../victory.js";
import { BuildSpot } from "../buildSpot/buildSpot.model.js";
import { Generator } from "../generator/generator.model.js";
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
    this.waves = [];
    this.icons = [];
    this.buildSpots = [];
    this.createWaves(this.waves, numberOfWave);
    this.currentWave = [this.waves[0]];
    this.initHUDText();
    console.log(this.currentWave.length);
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

  createWaves(mapWaves, numberOfWave) {
    return new Generator(mapWaves, numberOfWave);
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
      "🧟 VAGUES " + this.currentWave.length + "/" + this.waves.length;

    pauseDisplay.text = gameVariable.game.isPaused ? "▶" : "❚❚";
  }

  handleDeadDemons = () => {
    if (this.currentWave.demons) {
      this.currentWave.demons.filter((demon) => {
        demon.isDead;
        if (demon.isDead) {
          this.currentWave.demonDeads.push(demon);
          gameVariable.game.player.addGold(demon.goldReward);
          this.currentWave.demons = this.currentWave.demons.filter(
            (demon) => !demon.isDead
          );
          ckeckIfPlayerVictory(
            this.currentWave.demonDeads,
            this.currentWave.level.unitMax
          );
        }
      });
    }
  };

  updateWaveHudMask() {
    waveHudMask.text =
      "🧟 VAGUES " +
      dashboard.map.currentWave.length +
      "/" +
      dashboard.map.waves.length;
  }
}
