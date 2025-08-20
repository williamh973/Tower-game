import { SelectionScreen } from "../selectionScreen.model.js";

export class TowerSetupMenu extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);

    this.availableTowerIcons = [];
    this.arrowIcons = [];
    this.buildSpotMenu = null;
    this.hasChosenTowers = false;
    this.isTowerSetupMenuOpen = false;
    this.isGhostedMod = false;
    this.currentTowerIndex = 0;
  }
}
