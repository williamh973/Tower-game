import {
  buildSpotMenu,
  towerSetupMenu,
} from "../../../selectionScreen/selectionScreen.instance.js";
import { Icon } from "../../icon.model.js";

export class AvailableTowerIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
    text = "",
    name = ""
  ) {
    super(x, y, image, backgroundColor, width, height, isClickable, text, name);

    this.ghostIcon = null;
    this.tower = null;
  }

  checkInventoryForDuplicate() {
    return buildSpotMenu.slots.some((slot) => {
      return this.ghostIcon?.name === slot.content?.name;
    });
  }

  async activateGhostMod(tower) {
    this.ghostIcon = tower.buildSpotMenuTowerIcon;
    const duplicate = await this.checkInventoryForDuplicate();

    if (duplicate) {
      this.ghostIcon = null;
      this.tower = null;
      return console.log("Déja dans l'inventaire");
    }

    this.isActivated = true;
    towerSetupMenu.isGhostedMod = true;

    this.tower = tower;
    this.ghostIcon.isVisible = true;
    this.ghostIconInitialPosition();
    this.updateGhostIconPosition();
  }

  ghostIconInitialPosition() {
    this.ghostIcon.position.x = this.position.x;
    this.ghostIcon.position.y = this.position.y;
  }

  updateGhostIconPosition() {
    window.onmousemove = (e) => {
      if (towerSetupMenu.isGhostedMod) {
        this.ghostIcon.position.x = e.offsetX - this.ghostIcon.width / 2;
        this.ghostIcon.position.y = e.offsetY - this.ghostIcon.height / 2;
      }
    };
  }
}
