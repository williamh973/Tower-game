import { canvasManager, context } from "../../animate.js";
import { FloatingIcon } from "../icon/floatingIcon/floatingIcon.model.js";
import {
  theImgArrow,
  theImgThunderBolt,
  theImgCannon,
} from "../../assets/projectile.asset.js";
import { distanceX, distanceY, setDistance } from "../../shared/utils.js";
import { game } from "../../gameVariable.js";

export class Projectile {
  constructor(missilePosition, target, type, associatedTower) {
    this.position = { ...missilePosition };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.target = target;
    this.associatedTower = associatedTower;
    this.type = type;
    this.scale = 1;
    this.hasHit = false;
    this.hasGravity = false;
    this.hasReachedApex = false;
    this.gravity = 0.05;
    this.angle = 0;

    this.projectileProps();
    this.setArcShoot();
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
        this.width = 25;
        this.height = 20;
        this.speed = 1;
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

  setArcShoot() {
    switch (this.associatedTower.name) {
      case "cannon":
        this.handleBallisticPhaseOne();
        break;

      default:
        break;
    }
  }

  handleBallisticPhaseOne() {
    const distance = setDistance(this.target, this);

    this.velocity = {
      x: 0,
      y: (this.velocity.y -= 3),
    };
    if (this.hasReachedApex) this.handleBallisticPhaseTwo(distance);
  }

  handleBallisticPhaseTwo(distance) {
    this.velocity = {
      x: (distanceX / distance) * this.speed,
      y: (distanceY / distance) * this.speed,
    };
  }

  setShootParams() {
    if (this.associatedTower.name !== "cannon") {
      this.hasReachedApex = true;
      const distance = setDistance(this.target, this);

      this.velocity = {
        x: (distanceX / distance) * this.speed,
        y: (distanceY / distance) * this.speed,
      };
    }
  }

  update() {
    this.draw();
    this.debugDraw();
    this.handleHit(this.target);
    this.setGravity();
    this.setShootParams(); // pour une meilleure précision des tours sauf pour la tour à canon

    if (this.associatedTower.name === "cannon" && this.velocity.y <= 80)
      this.hasReachedApex = true;

    this.angle = Math.atan2(this.velocity.y, this.velocity.x);

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  remove() {
    this.associatedTower.projectiles = this.associatedTower.projectiles.filter(
      (projectile) => projectile.hasHit === false
    );
  }

  handleHit(target) {
    if (this.hasReachedApex)
      if (this.collide(target)) {
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

  collide(target) {
    return (
      this.position.y + this.height >= target.position.y &&
      this.position.y <= target.position.y + target.height &&
      this.position.x + this.width >= target.position.x &&
      this.position.x <= target.position.x + target.width
    );
  }

  setGravity() {
    if (this.hasGravity && this.position.y <= canvasManager.height)
      this.velocity.y += this.gravity;
  }

  spawnDemonGoldRewardIcon() {
    let goldRewardDisplay = new FloatingIcon(
      this.target.position.x,
      this.target.position.y,
      null,
      "goldRewardDisplay",
      "+ " + this.target.goldReward
    );
    game.toast = goldRewardDisplay;
  }

  applyDamageReduction(damage) {
    const towerTypes = ["normal"];
    if (towerTypes.includes(this.associatedTower.type))
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
    return damage;
  }

  getBaseDamages() {
    const baseDamage =
      this.associatedTower.attack - this.target.stats.defense / 2;
    return baseDamage;
  }

  debugDraw() {
    context.fillStyle = "rgba(255, 0, 0, 0.3)";
    context.beginPath();
    context.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2);
    context.fill();
  }
}
