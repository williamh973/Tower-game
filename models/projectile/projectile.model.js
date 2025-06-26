import { context } from "../../animate.js";
import { FloatingIcon } from "../icon/floatingIcon/floatingIcon.class.js";
import { gameVariable } from "../../gameVariable.js";

export class Projectile {
  constructor(
    missilePosition,
    missileTarget,
    type,
    associatedTower,
    image = null
  ) {
    this.position = { ...missilePosition };
    this.missileTarget = missileTarget;
    this.associatedTower = associatedTower;
    this.projectileProps();
    this.calculateDistance();
    this.width = this.width;
    this.height = this.height;
    this.type = type;
    this.image = image;
    this.scale = 1;
    this.hasHit = false;
    this.gravity = 0.5;
  }

  calculateDistance() {
    const dx =
      this.missileTarget.position.x +
      this.missileTarget.width / 2 -
      this.position.x;
    const dy =
      this.missileTarget.position.y +
      this.missileTarget.height / 2 -
      this.position.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    this.velocity = {
      x: (dx / length) * this.speed,
      y: (dy / length) * this.speed,
    };
  }

  projectileProps() {
    switch (this.associatedTower.name) {
      case "archer":
        this.width = 5;
        this.height = 5;
        this.speed = 4;
        break;
      case "wizard":
        this.width = 8;
        this.height = 8;
        this.speed = 3;
        break;
      case "cannon":
        this.width = 15;
        this.height = 15;
        this.speed = 2;
        break;
      case "fire":
        this.width = 12;
        this.height = 12;
        this.speed = 15;
        break;
      default:
    }
  }

  draw() {
    if (this.image) {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width * this.scale,
        this.height * this.scale
      );
    } else {
      context.fillStyle = "red";
      context.fillRect(
        this.position.x,
        this.position.y,
        this.width * this.scale,
        this.height * this.scale
      );
    }
  }

  update() {
    if (this.hasHit) return;

    this.draw();
    this.collide(this.missileTarget);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  collide(missileTarget) {
    if (
      this.position.y + this.height >= missileTarget.position.y &&
      this.position.y <= missileTarget.position.y + missileTarget.height &&
      this.position.x + this.width >= missileTarget.position.x &&
      this.position.x <= missileTarget.position.x + missileTarget.width
    ) {
      this.hasHit = true;
      let damage = this.getBaseDamages();
      damage = this.applyDamageReduction(damage);

      this.missileTarget.stats.health -= damage;

      if (this.missileTarget.stats.health <= 0) {
        this.missileTarget.isDead = true;
        this.spawnDemonGoldRewardIcon();
      }
    }
  }

  spawnDemonGoldRewardIcon() {
    let goldRewardDisplay = new FloatingIcon(
      this.missileTarget.position.x,
      this.missileTarget.position.y,
      null,
      "goldRewardDisplay",
      "+ " + this.missileTarget.goldReward
    );
    gameVariable.ui.floatingIconList.push(goldRewardDisplay);
  }

  applyDamageReduction(damage) {
    const towerTypeList = ["normal"];
    if (towerTypeList.includes(this.associatedTower.type)) {
      switch (this.missileTarget.armor) {
        case "light":
          damage = damage / 1.5;
          break;
        case "medium":
          damage = damage / 2;
          break;
        case "heavy":
          damage = damage / 2.5;
          break;
      }
    }
    return damage;
  }

  getBaseDamages() {
    const baseDamage =
      this.associatedTower.attack - this.missileTarget.stats.defense / 2;
    return baseDamage;
  }
}
