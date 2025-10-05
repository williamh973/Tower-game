import { context } from "../../../../animate.js";
import { gameVariable } from "../../../../gameVariable.js";
import {
  buildSpotMenu,
  towerSetupMenu,
} from "../../../selectionScreen/selectionScreen.instance.js";
import { FloatingIcon } from "../../floatingIcon/floatingIcon.model.js";
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

  errorMessage() {
    const width = 200;
    const height = 40;
    let toast = new FloatingIcon(
      300,
      200,
      null,
      "transparent",
      width,
      height,
      false,
      "Déjà dans l'inventaire !",
      "toast"
    );
    gameVariable.game.toast = toast;
  }

  checkInventoryForDuplicate() {
    return buildSpotMenu.slots.some(
      (slot) => this.ghostIcon?.name === slot.content?.name
    );
  }

  activateGhostMod(tower) {
    this.ghostIcon = tower.buildSpotMenuTowerIcon;
    const duplicate = this.checkInventoryForDuplicate();

    if (duplicate) {
      this.ghostIcon = null;
      this.tower = null;
      this.errorMessage();
      return;
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
