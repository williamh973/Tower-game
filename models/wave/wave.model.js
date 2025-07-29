import { fetchWaypoints } from "../../waypoint/waypointHandle.js";
import { gameVariable } from "../../gameVariable.js";
import { possibleDemonList } from "../../generators/possibleDemonList.js";
import { wave } from "../../spawnHandle/campaign/step/checkCampaignStep.js";

export class Wave {
  constructor(unitMax) {
    this.isWaveStarted = false;
    this.isWaveEnded = false;
    this.demonList = [];
    this.demonDeadList = [];
    this.interval = null;
    this.currentUnit = 0;
    this.unitMax = unitMax;
  }

  getRandomInterval(min = 1000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async init() {
    await fetchWaypoints();
  }

  start(startWaveIcon) {
    this.isWaveStarted = true;
    this.isWaveEnded = false;

    gameVariable.wave.currentWaveList.push(wave);

    this.spawnDemon(startWaveIcon);
  }

  spawnDemon(startWaveIcon) {
    if (this.currentUnit >= this.unitMax) {
      this.end(startWaveIcon);
      return;
    }
    this.demonList.push(this.randomDemon());
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
    const availableDemonList = possibleDemonList();
    let randomNumber = Math.floor(Math.random() * 7);
    return availableDemonList[randomNumber];
  }
}
