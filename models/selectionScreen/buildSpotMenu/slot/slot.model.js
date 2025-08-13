import { context } from "../../../../animate.js";
import { gameVariable } from "../../../../gameVariable.js";

export class Slot {
  constructor(x, y, name) {
    this.position = {
      x: x,
      y: y,
    };
    this.name = name;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.towerIcon = null;
    this.isOccupied = false;
  }

  draw() {
    if (this.isOccupied) {
      context.drawImage(
        this.towerIcon.image,
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
  }

  addTowerIconToSlot(slot, selectedIcon, remainingBuildMenuSlots) {
    if (!slot.isOccupied) {
      slot.towerIcon = selectedIcon.ghostTowerIcon;
      remainingBuildMenuSlots--;
      slot.isOccupied = true;
      gameVariable.preparation.isGhostedMod = false;
      selectedIcon.ghostTowerIcon = null;
    }
  }
}
