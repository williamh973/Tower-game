import { canvas, context } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  wizardTowerAvailableIcon,
} from "./availableTowersMenu/availableTowersMenuIcons.instance.js";

export class Icon {
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
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.name = name;
    this.isClickable = isClickable;
    this.ghostTowerIcon = null;
    this.isActivated = false;
    this.isVisible = true;
    this.associatedBuildSpot = {};
    this.scale = 1;
    this.scaleDirection = 1;
  }

  draw() {
    const avalaibleIconNames = [
      archerTowerAvailableIcon.name,
      wizardTowerAvailableIcon.name,
      cannonTowerAvailableIcon.name,
      groundTowerAvailableIcon.name,
      barrackTowerAvailableIcon.name,
      fireTowerAvailableIcon.name,
    ];

    context.save();

    if (avalaibleIconNames.includes(this.name)) {
      this.height = 100;
    }

    if (this.backgroundColor && this.backgroundColor !== "transparent") {
      this.drawBlackMask();
    }

    if (this.text) {
      this.drawText();
    }

    if (this.image && this.isVisible) {
      const centerX = this.position.x + this.width / 2;
      const centerY = this.position.y + this.height / 2;
      const scaledWidth = this.width * this.scale;
      const scaledHeight = this.height * this.scale;

      context.save();
      context.translate(centerX, centerY);
      context.drawImage(
        this.image,
        -scaledWidth / 2,
        -scaledHeight / 2,
        scaledWidth,
        scaledHeight
      );
      context.restore();
    }

    if (this.ghostTowerIcon !== null) {
      this.ghostTowerIcon.draw();
    }
  }

  drawBlackMask() {
    const radius = 5;
    context.beginPath();
    context.moveTo(this.position.x + radius, this.position.y);
    context.lineTo(this.position.x + this.width - radius, this.position.y);
    context.quadraticCurveTo(
      this.position.x + this.width,
      this.position.y,
      this.position.x + this.width,
      this.position.y + radius
    );
    context.lineTo(
      this.position.x + this.width,
      this.position.y + this.height - radius
    );
    context.quadraticCurveTo(
      this.position.x + this.width,
      this.position.y + this.height,
      this.position.x + this.width - radius,
      this.position.y + this.height
    );
    context.lineTo(this.position.x + radius, this.position.y + this.height);
    context.quadraticCurveTo(
      this.position.x,
      this.position.y + this.height,
      this.position.x,
      this.position.y + this.height - radius
    );
    context.lineTo(this.position.x, this.position.y + radius);
    context.quadraticCurveTo(
      this.position.x,
      this.position.y,
      this.position.x + radius,
      this.position.y
    );
    context.closePath();

    context.fillStyle = this.backgroundColor;
    context.fill();
  }

  drawText() {
    context.fillStyle = "whitesmoke";
    context.font = "bold 16px 'Palatino Linotype', 'Book Antiqua' ";
    context.fillText(this.text, this.position.x + 5, this.position.y + 18);
  }

  setAssociatedBuildSpot(buildSpot) {
    this.associatedBuildSpot = buildSpot;
  }

  updateAnimation() {
    const buttons = [
      "rightArrow",
      "leftArrow",
      "closeArrow",
      "openAvailableTowerMenu",
      "archerTowerAvailableIcon",
      "wizardTowerAvailableIcon",
      "cannonTowerAvailableIcon",
      "groundTowerAvailableIcon",
      "barrackTowerAvailableIcon",
      "fireTowerAvailableIcon",
    ];

    switch (this.name) {
      case "startWaveIcon":
        const speed = 0.005;
        const minScale = 0.95;
        const maxScale = 1.05;
        this.scale += this.scaleDirection * speed;

        if (this.scale >= maxScale || this.scale <= minScale) {
          this.scaleDirection *= -1;
        }
        break;
    }

    if (buttons.includes(this.name) && this.isClickable && this.isActivated) {
      this.clickAnimate();
    }
  }

  clickAnimate() {
    const speed = 0.03;
    const minScale = 0.8;
    const maxScale = 1.0;

    this.scale -= this.scaleDirection * speed;

    if (this.scale <= minScale) {
      this.scaleDirection *= -1;
    }
    if (this.scale >= maxScale) {
      this.scale = maxScale;
      this.scaleDirection = 1;
      this.isActivated = false;
      return;
    }
  }

  hidden() {
    if (this.name === "startWaveIcon") {
      return (this.isVisible = false);
    }
  }

  show() {
    if (
      this.name === "startWaveIcon" &&
      gameVariable.wave.currentWaveList.length !==
        gameVariable.wave.waveList.length
    ) {
      return (this.isVisible = true);
    }
  }

  hover() {}

  ghostIconInitialPosition(ghostIcon, availableTowerIcon) {
    ghostIcon.position.x = availableTowerIcon.position.x;
    ghostIcon.position.y = availableTowerIcon.position.y;
  }
}
