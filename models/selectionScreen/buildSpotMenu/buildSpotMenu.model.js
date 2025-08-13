import { gameVariable } from "../../../gameVariable.js";
import { updateGhostIconPosition } from "../../../shared/methodsUtils.js";
import { SelectionScreen } from "../selectionScreen.model.js";
import {
  first,
  fourth,
  initEmptySlots,
  second,
  third,
} from "./slot/slot.instance.js";

export class BuildSpotMenu extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);
    this.scaleDirection = 1;
    this.remainingBuildMenuSlots = 4;
    this.isGhostTowerPlaced = false;
    this.buildMenuSlots = [];
    this.init();
  }

  async init() {
    await initEmptySlots(this);
    this.buildMenuSlots.push(first, second, third, fourth);
  }

  activateGhostMod(tower, availableTowerIcon) {
    gameVariable.preparation.isGhostedMod = true;

    const isFull = this.isInventoryFull();

    if (isFull) {
      gameVariable.preparation.isGhostedMod = false;
      return console.log("inventaire plein");
    }

    const ghostIcon = tower.buildSpotMenuTowerIcon;

    availableTowerIcon.ghostTowerIcon = ghostIcon;
    availableTowerIcon.ghostIconInitialPosition(ghostIcon, availableTowerIcon);

    updateGhostIconPosition(ghostIcon);
  }

  isInventoryFull() {
    return this.remainingBuildMenuSlots < 1;
  }

  close(element) {
    gameVariable.ui.selectionScreenList =
      gameVariable.ui.selectionScreenList.filter(
        (screen) => screen.image !== element
      );
  }

  buildSpotMenu = () => {
    if (gameVariable.ui.isBuildSpotMenuOpen) {
      switch (this.name) {
        case "buildSpotMenu":
          const speed = 0.08;
          const maxScale = 1.0;
          this.scale += this.scaleDirection * speed;

          if (this.scale >= maxScale) {
            this.scale = maxScale;
          }
          break;
      }
    } else {
      switch (this.name) {
        case "buildSpotMenu":
          const speed = 0.08;
          const minScale = 0.5;
          this.scale -= this.scaleDirection * speed;

          if (this.scale <= minScale) {
            this.scale = minScale;
          }
          break;
      }
    }
  };

  updateAnimation() {
    if (!gameVariable.preparation.isAvailableTowersMenuOpen) {
      this.buildSpotMenu();
    }
  }
}
