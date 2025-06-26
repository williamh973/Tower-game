import { fetchWaypoints } from "../../waypoint/waypointHandle.js";
import { gameVariable } from "../../gameVariable.js";
import { wave } from "../../init.js";
import { possibleDemonList } from "../units/demon/possibleDemonList.js";

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
    fetchWaypoints();
  }

  async start(startWaveIcon) {
    this.isWaveStarted = true;
    this.isWaveEnded = false;

    gameVariable.wave.currentWaveList.push(wave);

    const spawnDemon = async () => {
      if (this.currentUnit > this.unitMax) {
        this.end(startWaveIcon);
        return;
      }
      this.demonList.push(this.randomDemon());
      this.currentUnit++;

      const delay = this.getRandomInterval();
      this.intervalId = setTimeout(spawnDemon, delay);
    };

    spawnDemon();
  }

  end(intervalId, startWaveIcon) {
    this.isWaveStarted = false;
    this.isWaveEnded = true;
    clearTimeout(intervalId);
    startWaveIcon.show();
    return;
  }

  randomDemon = () => {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
      return possibleDemonList.zorfang();
    } else {
      return possibleDemonList.gorax();
    }
  };
}
