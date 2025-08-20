import { context } from "../../../../animate.js";
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
    this.image = new Image();
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
  }

  addTowerIconToSlot(slot, selectedIcon, remainingBuildMenuSlots) {
    slot.content = selectedIcon.ghostTowerIcon;
    slot.tower = selectedIcon.tower;
    remainingBuildMenuSlots--;
    slot.isOccupied = true;
    selectedIcon.isClickable = false;
    towerSetupMenu.isGhostedMod = false;
    selectedIcon.ghostTowerIcon.isVisible = false;
  }
}
