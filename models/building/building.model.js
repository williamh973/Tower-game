import { context } from "../../animate.js";
import { Projectile } from "../projectile/projectile.model.js";
import { gameVariable } from "../../gameVariable.js";
import { wave } from "../../init.js";
import { theImgTowerUnderBuild } from "../../assets/towerUnderConst.assets.js";

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
        isDamageZone
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
        this.scale = 1;
        this.loading = 0;
        this.rateOfFire = rateOfFire;
        this.accuracy = 100;
        this.numberOfTarget = 1;
        this.lastShotTime = 0;
        this.target = {};
        this.attack = attack;
    }

    draw() {
        if (this.isUnderBuild) {
            context.drawImage(
                this.underBuildImage,
                this.position.x,
                this.position.y,
                this.width * this.scale,
                this.height * this.scale
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
            const dx = demon.position.x - this.position.x;
            const dy = demon.position.y - this.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

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
            y: this.position.y + this.height / 2
        };

        const associatedTower = {
            name: this.name,
            attack: this.attack,
            type: this.type,
            accuracy: this.accuracy
        };

        const projectile = new Projectile(
            missileInitPosition,
            this.target,
            this.type,
            associatedTower,
            null
        );

        gameVariable.battle.projectileList.push(projectile);
    }

    isUnderConstruction() {
        this.isUnderBuild = true;
        this.isLoading();
    }

    loadingBar() {
        context.fillStyle = "black";
        context.fillRect(this.position.x, this.position.y - 10, 51, 7);

        context.fillStyle = "orange";
        context.fillRect(
            this.position.x + 1,
            this.position.y - 9,
            this.loading,
            5
        );
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
}
