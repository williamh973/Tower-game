import { possibleDemons } from "../generator/possibleDemons.js";
import { dashboard } from "../selectionScreen/selectionScreen.instance.js";

export class Wave {
  constructor(demonMax, id) {
    this.id = id;
    this.isStarted = false;
    this.isEnded = false;
    this.isDemonFullyDeployed = false;
    this.demons = [];
    this.deadDemons = [];
    this.escapedDemons = [];
    this.interval = null;
    this.currentUnit = 0;
    this.demonMax = demonMax;
  }

  getRandomInterval(min = 1000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  start(startWaveIcon) {
    this.isStarted = true;
    this.spawnDemon(startWaveIcon);
  }

  spawnDemon(startWaveIcon) {
    if (this.currentUnit >= this.demonMax) {
      this.allDemonsDeployed(startWaveIcon);
      return;
    }
    const demon = this.randomDemon();
    this.demons.push(demon);
    dashboard.map.addActiveDemon(demon);
    this.currentUnit++;
    const delay = this.getRandomInterval();
    this.intervalId = setTimeout(() => this.spawnDemon(startWaveIcon), delay);
  }

  allDemonsDeployed(startWaveIcon) {
    this.isDemonFullyDeployed = true;
    clearTimeout(this.intervalId);
    startWaveIcon.show();
    return;
  }

  randomDemon() {
    const availableDemons = possibleDemons();
    let randomNumber = Math.floor(Math.random() * 7);
    return availableDemons[randomNumber];
  }
}
