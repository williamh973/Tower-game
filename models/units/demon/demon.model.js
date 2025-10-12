import { game } from "../../../gameVariable.js";
import { lifeHudMask } from "../../icon/mapIcons/mapIcons.instance.js";
import { Unit } from "../unit.model.js";

export class Demon extends Unit {
  constructor(
    position,
    width,
    height,
    image,
    waypoints,
    velocities,
    unitType,
    unitClass,
    damageType,
    stats,
    goldReward,
    armor,
    name
  ) {
    super(
      position,
      width,
      height,
      image,
      waypoints,
      velocities,
      unitType,
      unitClass,
      damageType,
      stats,
      goldReward,
      armor,
      name
    );
  }

  setDemonVelocity() {
    const baseVelocity = this.velocitys[this.currentWaypointIndex];
    this.velocity = {
      x: baseVelocity.x * this.stats.speed,
      y: baseVelocity.y * this.stats.speed,
    };
  }

  checkIfDemonReachedEnd() {
    if (this.currentWaypointIndex >= this.waypoints.length - 1) {
      this.isReachedEnd = true;
      this.isCanMove = false;
      game.player.life -= 1;
      lifeHudMask.text = "❤️ " + game.player.life;
      game.player.checkIfGameOver();
    }
  }

  demonFollowPath() {
    const target = this.waypoints[this.currentWaypointIndex + 1];

    if (target) {
      const distanceX = this.position.x - target.x;
      const distanceY = this.position.y - target.y;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < this.stats.speed) {
        this.position.x = target.x;
        this.position.y = target.y;

        this.currentWaypointIndex++;

        if (this.currentWaypointIndex < this.velocitys.length) {
          this.setDemonVelocity();
          this.checkIfDemonReachedEnd();
        } else {
          this.isCanMove = false;
          this.isDead = true;
        }
      }
    }
  }
}
