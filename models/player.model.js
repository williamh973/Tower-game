import { goldHudMask, lifeHudMask } from "./icon/mapIcons/mapIcons.instance.js";

export class Player {
  constructor() {
    this.life = 20;
    this.gold = 1000;
    this.isCanBuildTower = true;
    this.hasWon = false;
    this.hasLost = false;
    this.placedTowers = [];
  }

  substractGold(towerPrice) {
    this.gold -= towerPrice;
    goldHudMask.text = "🪙 " + this.gold;
  }

  substractLife() {
    this.life -= 1;
    lifeHudMask.text = "❤️ " + this.life;
  }

  addGold(gold) {
    this.gold += gold;
    goldHudMask.text = "🪙 " + this.gold;
  }

  checkStatus(currentWave) {
    if (currentWave.deadDemons >= currentWave.level.demonMax) {
    }
    currentWave
      ? this.ckeckIfPlayerVictory(currentWave)
      : this.checkIfGameOver();
  }

  ckeckIfPlayerVictory(currentWave) {
    if (
      this.life >= 0 &&
      currentWave.deadDemons >= currentWave.level.demonMax
    ) {
      this.hasWon = true;
      alert("Victory !");
    }
  }

  checkIfGameOver() {
    if (this.life <= 0) {
      lifeHudMask.text = "❤️ " + this.life;
      this.hasLost = true;
      alert("Game over");
    }
  }
}
