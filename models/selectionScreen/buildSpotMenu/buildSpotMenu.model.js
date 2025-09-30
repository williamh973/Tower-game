import { gameVariable } from "../../../gameVariable.js";
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
    this.isOpen = false;
    this.slots = [];
    this.tower = null;

    this.init();
  }

  async init() {
    await initEmptySlots(this);
    this.slots.push(first, second, third, fourth);
  }

  open(towerSetupMenuOpen, spot) {
    this.isOpen = !this.isOpen;

    if (!towerSetupMenuOpen) {
      this.scale = 0.3;
      this.position = {
        x: spot.position.x - this.width / 2.4,
        y: spot.position.y - this.height / 2.5,
      };
      initEmptySlots(this);
      console.log(this.slots);
    }

    this.isOpen
      ? gameVariable.game.selectionScreens.push(this)
      : this.close(this);
  }

  async close(element) {
    gameVariable.game.selectionScreens =
      gameVariable.game.selectionScreens.filter(
        (screen) => screen.image !== element.image
      );
  }

  openedAnimation() {
    if (towerSetupMenu.isOpen || this.isOpen) {
      const speed = 0.08;
      const maxScale = 1.0;
      this.scale += this.scaleDirection * speed;

      if (this.scale >= maxScale) {
        this.scale = maxScale;
      }
    } else {
      const speed = 0.08;
      const minScale = 0.5;
      this.scale -= this.scaleDirection * speed;

      if (this.scale <= minScale) {
        this.scale = minScale;
      }
    }
  }
}
