import { context } from "../../../../animate.js";
import { theEmptySlotIcon } from "../../../../assets/icon.asset.js";
import { gameVariable } from "../../../../gameVariable.js";
// import { buildTower } from "../../../../spawnHandle/tower.js";
import { dashboard, towerSetupMenu } from "../../selectionScreen.instance.js";

export class Slot {
  constructor(x, y, name) {
    this.position = {
      x: x,
      y: y,
    };
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.animationTime = 0;
    this.image = theEmptySlotIcon;
    this.content = null;
    this.tower = null;
    this.isOccupied = false;
  }

  draw() {
    if (this.isOccupied)
      context.drawImage(
        this.content.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    else
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

    if (towerSetupMenu.isGhostedMod) this.animation();
  }

  toggle(selectedIcon, buildSpotMenu) {
    if (towerSetupMenu.isGhostedMod)
      this.addTowerIconToSlot(this, selectedIcon, buildSpotMenu);
    else this.buildTower(buildSpotMenu);
  }

  addTowerIconToSlot(slot, selectedIcon, buildSpotMenu) {
    slot.content = selectedIcon.ghostIcon;
    slot.tower = selectedIcon.tower;
    slot.isOccupied = true;
    towerSetupMenu.isGhostedMod = false;
    selectedIcon.ghostIcon.isVisible = false;
    buildSpotMenu.remainingSlots--;
  }

  buildTower(buildSpotMenu) {
    if (!dashboard.map) return;
    if (!buildSpotMenu.isAnimateFinished) return;

    if (gameVariable.game.player.gold >= this.tower?.price) {
      gameVariable.game.player.placedTowers.push(this.tower);
      this.updateTowerProps(buildSpotMenu);
      this.tower.isUnderConstruction();
      buildSpotMenu.associatedBuildSpot.build(this.tower);
      gameVariable.game.player.substractGold(this.tower.price);
      buildSpotMenu.toggle(false, null);
    }
  }

  updateTowerProps(buildSpotMenu) {
    const towerProps = {
      position: {
        x:
          buildSpotMenu.associatedBuildSpot.position.x -
          buildSpotMenu.associatedBuildSpot.width / 2,
        y:
          buildSpotMenu.associatedBuildSpot.position.y -
          buildSpotMenu.associatedBuildSpot.height / 1.3,
      },
      width: 60,
      height: 60,
    };

    this.tower.position = towerProps.position;
    this.tower.width = towerProps.width;
    this.tower.height = towerProps.height;
  }

  animation() {
    this.animationTime += 0.005;
    const centerX = this.position.x + this.width / 2;
    const centerY = this.position.y + this.height / 2;
    const radius =
      Math.max(this.width, this.height) * 0.5 +
      Math.sin(this.animationTime) * 6;
    context.save();
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    const gradient = context.createRadialGradient(
      centerX,
      centerY,
      this.width / 4,
      centerX,
      centerY,
      radius
    );
    gradient.addColorStop(0, "rgba(255, 255, 0, 0.35)");
    gradient.addColorStop(1, "rgba(255, 255, 0, 0)");
    context.fillStyle = gradient;
    context.fill();
    context.restore();
    const scale = 1 + Math.sin(this.animationTime * 2) * 0.04;
    context.save();
    context.translate(centerX, centerY);
    context.scale(scale, scale);
    context.translate(-centerX, -centerY);

    if (this.isOccupied)
      context.drawImage(
        this.content.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    else
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

    context.restore();
  }
}
