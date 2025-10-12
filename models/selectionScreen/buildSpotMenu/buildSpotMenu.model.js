import { game } from "../../../gameVariable.js";
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
    this.remainingSlots = 4;
    this.isGhostTowerPlaced = false;
    this.isOpen = false;
    this.isAnimateFinished = false;
    this.slots = [];
    this.tower = null;
    this.associatedBuildSpot = null;

    this.init();
  }

  async init() {
    await initEmptySlots(this);
    this.slots.push(first, second, third, fourth);
  }

  toggle(towerSetupMenuOpen, spot) {
    this.isAnimateFinished = false;
    if (this.isOpen) this.close(this);
    else this.open(towerSetupMenuOpen, spot);
  }

  open(towerSetupMenuOpen, spot) {
    this.isOpen = true;
    this.setInitialScale();

    if (!towerSetupMenuOpen) {
      this.setAssociatedBuildSpot(spot);
      this.updatePositions(spot);
    }

    game.selectionScreens.push(this);
  }

  async close(element) {
    this.isOpen = false;
    game.selectionScreens = game.selectionScreens.filter(
      (screen) => screen.image !== element.image
    );
  }

  toggleAnimate() {
    if (this.isOpen) {
      const speed = 0.08;
      const maxScale = 1.0;
      this.scale += this.scaleDirection * speed;
      if (this.scale >= maxScale) {
        this.scale = maxScale;
        this.isAnimateFinished = true;
      }
    } else {
      const speed = 0.08;
      const minScale = 0.3;
      this.scale -= this.scaleDirection * speed;

      if (this.scale <= minScale) {
        this.scale = minScale;
        this.isAnimateFinished = true;
      }
    }
  }

  setAssociatedBuildSpot(buildSpot) {
    this.associatedBuildSpot = buildSpot;
  }

  setInitialScale() {
    this.scale = 0.3;
  }

  updatePositions(spot) {
    const [first, second, third, fourth] = this.slots;
    this.updateSlots(spot, first, second, third, fourth);
    this.updateSlotContent(first, second, third, fourth);
  }

  updateSlots(spot, first, second, third, fourth) {
    this.position = {
      x: spot.position.x - this.width / 2.4,
      y: spot.position.y - this.height / 2.5,
    };

    first.position.x = this.position.x + this.width / 2 - 25;
    first.position.y = this.position.y + 25 / 2;
    second.position.x = this.position.x + this.width / 1.5;
    second.position.y = this.position.y + this.height / 2.6;
    third.position.x = this.position.x + this.width / 2 - 25;
    third.position.y = this.position.y + this.height / 1.49;
    fourth.position.x = this.position.x + 25 / 1.5;
    fourth.position.y = this.position.y + this.height / 2.7;
  }

  updateSlotContent(first, second, third, fourth) {
    first.content.position = first.position;
    // second.content.position = second.position;
    // third.content.position = third.position;
    // fourth.content.position = fourth.position;
  }
}
