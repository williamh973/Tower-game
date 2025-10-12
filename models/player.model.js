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

  addGold(gold) {
    this.gold += gold;
    goldHudMask.text = "🪙 " + this.gold;
  }

  checkIfGameOver() {
    if (this.life <= 0) {
      lifeHudMask.text = "❤️ " + this.life;
      this.hasLost = true;
      alert("Game over");
    }
  }
}
