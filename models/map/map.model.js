import { canvasManager } from "../../animate.js";
import { game } from "../../gameVariable.js";
import { buildSpotPositions } from "../../shared/utils.js";
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
    this.activeDemons = [];
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

  spawnBuildSpot(positions) {
    positions.forEach((pos) => this.buildSpots.push(new BuildSpot(pos)));
    this.buildSpots.forEach((spot) => this.addHoverable(spot));
  }

  initBuildSpot() {
    const stepKey =
      Object.keys(buildSpotPositions)[dashboard.campaignCurrentStep - 1];
    if (stepKey) this.spawnBuildSpot(buildSpotPositions[stepKey]);
  }

  initHUDText() {
    lifeHudMask.text = "❤️ " + game.player.life;
    goldHudMask.text = "🪙 " + game.player.gold;
    waveHudMask.text = this.displayWaves();
    pauseIcon.text = game.isPaused ? "▶" : "❚❚";
  }

  addHoverable(element) {
    this.hoverables.push(element);
  }

  addActiveDemon(demon) {
    this.activeDemons.push(demon);
  }

  addDeadDemon(demon) {
    return this.currentWave.deadDemons.push(demon);
  }

  removeActiveDemon(demon) {
    const index = this.activeDemons.indexOf(demon);
    if (index !== -1) this.activeDemons.splice(index, 1);
  }

  removeCurrentWaveDemon(demon) {
    const index = this.currentWave.demons.indexOf(demon);
    if (index !== -1) this.currentWave.demons.splice(index, 1);
  }

  displayWaves() {
    return (
      "🧟 VAGUES " +
      (this.waves.indexOf(this.currentWave) + 1) +
      "/" +
      this.waves.length
    );
  }

  updateWaveHudMask() {
    waveHudMask.text = this.displayWaves();
  }

  updateWave(demon) {
    this.addDeadDemon(demon);
    this.removeCurrentWaveDemon(demon);
    this.removeActiveDemon(demon);
    console.log(
      "activeDemons",
      this.activeDemons,
      "wave",
      this.currentWave.demons
    );
  }

  handleDemonDead(demon) {
    if (!demon.isDead) return;
    this.updateWave(demon);
    game.player.addGold(demon.goldReward);
  }

  goNextWave() {
    const currentIndex = this.waves.indexOf(this.currentWave);

    if (currentIndex < this.waves.length - 1) {
      this.currentWave = this.waves[currentIndex + 1];
      this.currentWave.isStarted = false;
      this.updateWaveHudMask();
    }
  }
}
