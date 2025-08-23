import { gameVariable } from "../../../gameVariable.js";
import { updateGhostIconPosition } from "../../../shared/utils.js";
import { towerSetupMenu } from "../selectionScreen.instance.js";
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
    this.tower = null;

    this.init();
  }

  async init() {
    await initEmptySlots(this);
    this.buildMenuSlots.push(first, second, third, fourth);
  }

  activateGhostMod(tower, availableTowerIcon) {
    towerSetupMenu.isGhostedMod = true;

    const ghostIcon = tower.buildSpotMenuTowerIcon;

    availableTowerIcon.isClickable = false;
    availableTowerIcon.tower = tower;
    availableTowerIcon.ghostIcon = ghostIcon;
    availableTowerIcon.ghostIcon.isVisible = true;
    availableTowerIcon.ghostIconInitialPosition(ghostIcon, availableTowerIcon);
    console.log(availableTowerIcon.ghostIcon);
    updateGhostIconPosition(ghostIcon);
  }

  close(element) {
    gameVariable.game.selectionScreenList =
      gameVariable.game.selectionScreenList.filter(
        (screen) => screen.image !== element
      );
  }

  animation = () => {
    if (towerSetupMenu.isTowerSetupMenuOpen) {
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
    this.animation();
    if (!towerSetupMenu.isTowerSetupMenuOpen) {
    }
  }
}
