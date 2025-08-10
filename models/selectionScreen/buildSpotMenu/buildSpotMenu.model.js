import { gameVariable } from "../../../gameVariable.js";
import { updateGhostIconPosition } from "../../../shared/methodsUtils.js";
import { SelectionScreen } from "../selectionScreen.model.js";

export class BuildSpotMenu extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);
    this.scaleDirection = 1;
    this.remainingBuildMenuSlots = 5;
    this.isGhostTowerPlaced = false;
    this.buildMenuSlots = [];
  }

  async setTowerToBuildSpotMenu(archerTower, availableTowerIcon) {
    await this.checkInventory();
    const ghostIcon = archerTower.buildSpotMenuTowerIcon;

    if (!ghostIcon) return console.log("pas de ghostIcon");

    availableTowerIcon.ghostTowerIcon = ghostIcon;
    availableTowerIcon.ghostIconInitialPosition(ghostIcon, availableTowerIcon);

    updateGhostIconPosition(ghostIcon);
  }

  async checkInventory() {
    if (this.remainingBuildMenuSlots < 1)
      return console.log("inventaire plein");
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
