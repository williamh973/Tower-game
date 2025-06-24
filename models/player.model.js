export class Player {
  constructor() {
    this.life = 20;
    this.gold = 1000;
    this.isCanBuildTower = true;
  }
}

export const player = new Player();