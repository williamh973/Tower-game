import { SelectionScreen } from "../selectionScreen.model.js";

export class LevelDifficultyMenu extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);

    this.isLevelDifficultyMenuOpen = false;
    this.icons = [];
  }
}
