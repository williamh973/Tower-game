import { context } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import { checkIfUnitLeavesMap } from "../../playerActions.js";

export class Unit {
  constructor(
    position,
    width,
    height,
    image,
    waypointList,
    velocitiList,
    type,
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
    this.velocitiList = velocitiList;
    this.type = type;
    this.goldReward = goldReward;
    this.armor = armor;
    this.name = name;
    this.currentWaypointIndex = 0;
    this.frame = 0;
    this.scale = 2;
    this.isCanMove = true;
    this.isDead = false;
    this.speed = 2;

    this.velocity = { ...this.velocitiList[this.currentWaypointIndex] };
    this.stats = stats;
  }

  draw() {
    if (this.isDead) return;
    if (this.name === "gorax") {
      context.fillStyle = "brown";
    } else {
      context.fillStyle = "black";
    }
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

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    const target = this.waypointList[this.currentWaypointIndex + 1];

    if (
      target &&
      Math.abs(this.position.x - target.x) < 1 &&
      Math.abs(this.position.y - target.y) < 1
    ) {
      this.position.x = target.x;
      this.position.y = target.y;

      this.currentWaypointIndex++;

      if (this.currentWaypointIndex < this.velocitiList.length) {
        this.velocity = {
          ...this.velocitiList[this.currentWaypointIndex],
        };

        checkIfUnitLeavesMap(
          this.currentWaypointIndex,
          this.waypointList.length,
          gameVariable,
          this.isCanMove
        );
      } else {
        this.isCanMove = false;
        this.isDead = true;
      }
    }
  }

  update() {
    if (this.isDead) return;
    this.move();
    this.draw();
    this.drawRectHp();
  }
}
