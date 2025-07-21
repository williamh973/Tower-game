import { canvasManager, context } from "../../animate.js";
import { FloatingIcon } from "../icon/floatingIcon/floatingIcon.class.js";
import { gameVariable } from "../../gameVariable.js";
import {
  theImgArrow,
  theImgThunderBolt,
  theImgCannon,
} from "../../assets/projectile.asset.js";

export class Projectile {
  constructor(missilePosition, target, type, associatedTower, image) {
    this.position = { ...missilePosition };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.target = target;
    this.associatedTower = associatedTower;
    this.projectileProps();
    this.width = this.width;
    this.height = this.height;
    this.type = type;
    this.image = image;
    this.scale = 1;
    this.hasHit = false;
    this.hasGravity = false;
    this.gravity = 0.05;
    this.angle = 0;
    this.setDistance();
  }

  projectileProps() {
    switch (this.associatedTower.name) {
      case "archer":
        this.width = 16;
        this.height = 8;
        this.speed = 4;
        this.image = theImgArrow;
        this.hasGravity = true;
        break;
      case "wizard":
        this.width = 17;
        this.height = 17;
        this.speed = 3;
        this.image = theImgThunderBolt;
        this.hasGravity = false;
        break;
      case "cannon":
        this.width = 30;
        this.height = 25;
        this.speed = 2;
        this.image = theImgCannon;
        this.hasGravity = true;
        break;
      case "fire":
        this.width = 12;
        this.height = 12;
        this.speed = 15;
        this.image = theImgThunderBolt;
        this.hasGravity = true;
        break;
      default:
    }
  }

  draw() {
    if (this.image) {
      context.save();

      const centerX = this.position.x + (this.width * this.scale) / 2;
      const centerY = this.position.y + (this.height * this.scale) / 2;

      context.translate(centerX, centerY);
      context.rotate(this.angle);

      context.drawImage(
        this.image,
        -(this.width * this.scale) / 2,
        -(this.height * this.scale) / 2,
        this.width * this.scale,
        this.height * this.scale
      );

      context.restore();
    }
  }

  setDistance() {
    const distanceX =
      this.target.position.x + this.target.width / 2 - this.position.x;
    const distanceY =
      this.target.position.y + this.target.height / 2 - this.position.y;

    const distance = Math.hypot(distanceX, distanceY);

    this.velocity = {
      x: (distanceX / distance) * this.speed,
      y: (distanceY / distance) * this.speed,
    };

    this.angle = Math.atan2(this.velocity.y, this.velocity.x);
  }

  update() {
    this.projectileProps();
    this.draw();
    this.collide(this.target);
    this.setDistance();
    this.setGravity();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  remove() {
    gameVariable.battle.projectileList =
      gameVariable.battle.projectileList.filter(
        (projectile) => projectile.hasHit === false
      );
  }

  collide(target) {
    if (
      this.position.y + this.height >= target.position.y &&
      this.position.y <= target.position.y + target.height &&
      this.position.x + this.width >= target.position.x &&
      this.position.x <= target.position.x + target.width
    ) {
      this.hasHit = true;

      this.remove();
      let damage = this.getBaseDamages();
      damage = this.applyDamageReduction(damage);

      this.target.stats.health -= damage;

      if (this.target.stats.health <= 0) {
        this.target.isDead = true;
        this.spawnDemonGoldRewardIcon();
      }
    }
  }

  setGravity() {
    if (this.hasGravity && this.position.y <= canvasManager.height) {
      this.velocity.y -= this.gravity;
    }
  }

  spawnDemonGoldRewardIcon() {
    let goldRewardDisplay = new FloatingIcon(
      this.target.position.x,
      this.target.position.y,
      null,
      "goldRewardDisplay",
      "+ " + this.target.goldReward
    );
    gameVariable.ui.floatingIconList.push(goldRewardDisplay);
  }

  applyDamageReduction(damage) {
    const towerTypeList = ["normal"];
    if (towerTypeList.includes(this.associatedTower.type)) {
      switch (this.target.armor) {
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
      this.associatedTower.attack - this.target.stats.defense / 2;
    return baseDamage;
  }
}
