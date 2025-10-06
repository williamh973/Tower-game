import { context } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { lifeHudMask } from "../icon/mapIcons/mapIcons.instance.js";
import { unitRectangleColor } from "./unitRectangleColor.js";

export class Unit {
  constructor(
    position,
    width,
    height,
    image,
    waypointList,
    velocityList,
    unitType,
    unitClass,
    damageType,
    stats,
    goldReward,
    armor,
    name = ""
  ) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.image = image;
    this.waypointList = waypointList;
    this.velocityList = velocityList;
    this.unitType = unitType;
    this.unitClass = unitClass;
    this.damageType = damageType;
    this.goldReward = goldReward;
    this.armor = armor;
    this.name = name;
    this.currentWaypointIndex = 0;
    this.frame = 0;
    this.scale = 2;
    this.isCanMove = true;
    this.isDead = false;
    this.stats = stats;
    this.setVelocity();
  }

  draw() {
    if (this.isDead) return;

    unitRectangleColor(this.name);

    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  drawRectHp() {
    // const hpWidth = (this.stats.health / this.stats.maxHealth) * this.width * 2;
    const hpWidth = (this.stats.health / this.stats.maxHealth) * this.width;

    const hpHeight = 2;

    context.fillStyle = "black";
    context.fillRect(
      this.position.x,
      this.position.y - 10,
      this.width,
      hpHeight
    );

    context.fillStyle = "lightgreen";
    context.fillRect(this.position.x, this.position.y - 10, hpWidth, hpHeight);
  }

  checkIfUnitReachedEnd() {
    if (this.currentWaypointIndex >= this.waypointList.length - 1) {
      gameVariable.game.player.life -= 1;
      lifeHudMask.text = "❤️ " + gameVariable.game.player.life;
      this.isCanMove = false;
      gameVariable.game.player.gameOver();
    }
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    const target = this.waypointList[this.currentWaypointIndex + 1];

    if (target) {
      const distanceX = this.position.x - target.x;
      const distanceY = this.position.y - target.y;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < this.stats.speed) {
        this.position.x = target.x;
        this.position.y = target.y;

        this.currentWaypointIndex++;

        if (this.currentWaypointIndex < this.velocityList.length) {
          this.setVelocity();
          this.checkIfUnitReachedEnd();
        } else {
          this.isCanMove = false;
          this.isDead = true;
        }
      }
    }
  }

  setVelocity() {
    const baseVelocity = this.velocityList[this.currentWaypointIndex];
    this.velocity = {
      x: baseVelocity.x * this.stats.speed,
      y: baseVelocity.y * this.stats.speed,
    };
  }

  update() {
    if (this.isDead) return;
    this.move();
    this.draw();
    this.drawRectHp();
  }
}
