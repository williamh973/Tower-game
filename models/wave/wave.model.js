import { possibleDemons } from "../generator/possibleDemons.js";

export class Wave {
  constructor(unitMax) {
    this.isWaveStarted = false;
    this.isWaveEnded = false;
    this.demons = [];
    this.demonDeads = [];
    this.interval = null;
    this.currentUnit = 0;
    this.level = {
      unitMax: unitMax,
    };
  }

  getRandomInterval(min = 1000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  start(startWaveIcon) {
    this.isWaveStarted = true;
    this.isWaveEnded = false;

    this.spawnDemon(startWaveIcon);
  }

  spawnDemon(startWaveIcon) {
    if (this.currentUnit >= this.level.unitMax) {
      this.end(startWaveIcon);
      return;
    }
    this.demons.push(this.randomDemon());

    this.currentUnit++;
    const delay = this.getRandomInterval();
    this.intervalId = setTimeout(() => this.spawnDemon(startWaveIcon), delay);
  }

  end(startWaveIcon) {
    this.isWaveStarted = false;
    this.isWaveEnded = true;
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
