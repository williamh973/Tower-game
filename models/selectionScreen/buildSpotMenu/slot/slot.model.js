import { context } from "../../../../animate.js";
import { theEmptySlotIcon } from "../../../../assets/icon.asset.js";
import { towerSetupMenu } from "../../selectionScreen.instance.js";

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
    if (this.isOccupied) {
      context.drawImage(
        this.content.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    if (towerSetupMenu.isGhostedMod) {
      this.animation();
    }
  }

  addTowerIconToSlot(slot, selectedIcon, remainingBuildMenuSlots) {
    slot.content = selectedIcon.ghostIcon;
    slot.tower = selectedIcon.tower;
    slot.isOccupied = true;
    towerSetupMenu.isGhostedMod = false;
    selectedIcon.ghostIcon.isVisible = false;
    remainingBuildMenuSlots--;
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

    if (this.isOccupied) {
      context.drawImage(
        this.content.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    } else {
      context.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    context.restore();
  }
}
