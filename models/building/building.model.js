import { context } from "../../animate.js";
import { Projectile } from "../projectile/projectile.model.js";
import { gameVariable } from "../../gameVariable.js";
import { theImgTowerUnderBuild } from "../../assets/towerUnderConst.assets.js";
import { setDistance } from "../../shared/methodsUtils.js";
import { wave } from "../../spawnHandle/campaign/step/checkCampaignStep.js";

export class Building {
  constructor(
    position,
    width,
    height,
    towerImage,
    type,
    name,
    range,
    price,
    attack,
    rateOfFire,
    isDamageZone,
    towerIcon,
    buildSpotMenuTowerIcon
  ) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.towerImage = towerImage;
    this.underBuildImage = theImgTowerUnderBuild;
    this.type = type;
    this.name = name;
    this.range = range;
    this.price = price;
    this.isDamageZone = isDamageZone;
    this.isCanAttack = true;
    this.isClickable = true;
    this.isUnderBuild = false;
    this.isBuild = false;
    this.scale = 1.3;
    this.loading = 0;
    this.rateOfFire = rateOfFire;
    this.numberOfTarget = 1;
    this.lastShotTime = 0;
    this.target = {};
    this.towerIcon = towerIcon;
    this.buildSpotMenuTowerIcon = buildSpotMenuTowerIcon;
    this.attack = attack;
  }

  draw() {
    if (this.isUnderBuild) {
      const underBuildImageWidth = this.width - 20;
      const underBuildImageHeight = this.height - 20;

      context.drawImage(
        this.underBuildImage,
        this.position.x + 15,
        this.position.y + 20,
        underBuildImageWidth * this.scale,
        underBuildImageHeight * this.scale
      );
      this.loadingBar();
    } else {
      context.drawImage(
        this.towerImage,
        this.position.x,
        this.position.y,
        this.width * this.scale,
        this.height * this.scale
      );
    }
  }

  update(currentTime) {
    this.draw();
    if (!this.isBuild) return;

    const isTargetValid =
      this.target?.position &&
      Math.hypot(
        this.target.position.x - this.position.x,
        this.target.position.y - this.position.y
      ) <= this.range;

    if (!isTargetValid) {
      this.selectedTarget();
    }

    if (
      this.isCanAttack &&
      this.target &&
      currentTime - this.lastShotTime >= this.rateOfFire &&
      !this.target.isDead
    ) {
      this.shoot();
      this.lastShotTime = currentTime;
    } else {
      this.selectedTarget();
    }
  }

  selectedTarget() {
    for (const demon of wave.demonList) {
      const distance = setDistance(demon, this);
      if (distance <= this.range) {
        this.target = demon;
        return;
      }
    }

    this.target = null;
  }

  shoot() {
    if (!this.target?.position) return;

    const missileInitPosition = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    const associatedTower = {
      name: this.name,
      attack: this.attack,
      type: this.type,
    };

    const projectile = new Projectile(
      missileInitPosition,
      this.target,
      this.type,
      associatedTower
    );

    gameVariable.battle.projectileList.push(projectile);
  }

  isUnderConstruction() {
    this.isUnderBuild = true;
    this.isLoading();
  }

  loadingBar() {
    const barWidth = 51;
    const barHeight = 7;
    const positionX = this.position.x + this.width / 4;
    context.fillStyle = "black";
    context.fillRect(positionX, this.position.y - 10, barWidth, barHeight);

    context.fillStyle = "orange";
    context.fillRect(positionX + 1, this.position.y - 9, this.loading, 5);
  }

  isLoading() {
    const intervalTime = 40;
    const loadingTime = setInterval(() => {
      this.loading++;

      if (this.loading === 50) {
        clearInterval(loadingTime);
        this.isUnderBuild = false;
        this.draw();
        this.isBuild = true;
      }
    }, intervalTime);
  }

  drawDebugCollisionSquare() {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 1;

    context.rect(
      this.position.x,
      this.position.y,
      this.width * this.scale,
      this.height * this.scale
    );

    context.stroke();
    context.closePath();
  }
}
