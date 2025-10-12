import { canvasManager } from "../../animate.js";
import { game } from "../../gameVariable.js";
import { buildSpotPositions } from "../../shared/utils.js";
import { ckeckIfPlayerVictory } from "../../victory.js";
import { BuildSpot } from "../buildSpot/buildSpot.model.js";
import { Generator } from "../generator/generator.model.js";
import {
  goldCoinIcon,
  goldHudMask,
  lifeHudMask,
  pauseIcon,
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
    this.hoverables = [startWaveIcon, pauseIcon];
    this.createWaves(this.waves, numberOfWave);
    this.currentWave = this.waves[0];
    this.initHUDText();
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
      pauseIcon,
      goldCoinIcon
    );
  }

  initBuildSpot() {
    const stepKey =
      Object.keys(buildSpotPositions)[dashboard.campaignCurrentStep - 1];
    if (stepKey) this.spawnBuildSpot(buildSpotPositions[stepKey]);
  }

  spawnBuildSpot(positions) {
    positions.forEach((pos) => this.buildSpots.push(new BuildSpot(pos)));
    this.buildSpots.forEach((spot) => this.addHoverable(spot));
  }

  addHoverable(element) {
    this.hoverables.push(element);
  }

  displayWaves() {
    return (
      "🧟 VAGUES " +
      (this.waves.indexOf(this.currentWave) + 1) +
      "/" +
      this.waves.length
    );
  }

  initHUDText() {
    lifeHudMask.text = "❤️ " + game.player.life;
    goldHudMask.text = "🪙 " + game.player.gold;
    waveHudMask.text = this.displayWaves();
    pauseIcon.text = game.isPaused ? "▶" : "❚❚";
  }

  deadDemons() {
    if (this.currentWave) {
      this.currentWave.demons.filter((demon) => {
        if (demon.isDead) {
          console.log("ca passe");
          this.currentWave.demonDeads.push(demon);
          game.player.addGold(demon.goldReward);
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
  }

  updateWaveHudMask() {
    waveHudMask.text = this.displayWaves();
  }
}
