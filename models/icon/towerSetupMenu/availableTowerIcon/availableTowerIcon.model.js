import { gameVariable } from "../../../../gameVariable.js";
import {
  buildSpotMenu,
  towerSetupMenu,
} from "../../../selectionScreen/selectionScreen.instance.js";
import { inventoryDuplicataIcon } from "../../floatingIcon/floatingIcon.instance.js";
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
    inventoryDuplicataIcon.text = "Déjà dans l'inventaire";
    inventoryDuplicataIcon.name = "inventoryDuplicataIcon";
    inventoryDuplicataIcon.position.x = 300;
    inventoryDuplicataIcon.position.y = 300;
    gameVariable.ui.floatingIconList.push(inventoryDuplicataIcon);
    return gameVariable.ui.floatingIconList;
  }

  checkInventoryForDuplicate() {
    return buildSpotMenu.slots.some((slot) => {
      return this.ghostIcon?.name === slot.content?.name;
    });
  }

  activateGhostMod(tower) {
    this.ghostIcon = tower.buildSpotMenuTowerIcon;
    const duplicate = this.checkInventoryForDuplicate();

    if (duplicate) {
      this.ghostIcon = null;
      this.tower = null;
      const errorMessage = this.errorMessage();
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
