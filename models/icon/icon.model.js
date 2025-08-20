import { context } from "../../animate.js";
import { dashboard } from "../selectionScreen/selectionScreen.instance.js";
import { pulse, reversePulse } from "./aniamtions/icon.animation.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  closeArrow,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  leftArrow,
  openAvailableTowerMenuIcon,
  rightArrow,
  wizardTowerAvailableIcon,
} from "./towerSetupMenu/towerSetupMenuIcons.instance.js";

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
    this.isActivated = false;
    this.isHovering = false;
    this.ghostTowerIcon = null;
    this.isVisible = true;
    this.associatedBuildSpot = {};
    this.scale = 1;
    this.scaleDirection = 1;
  }

  draw() {
    context.save();

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
    const avalaibleIconNames = [
      archerTowerAvailableIcon.name,
      wizardTowerAvailableIcon.name,
      cannonTowerAvailableIcon.name,
      groundTowerAvailableIcon.name,
      barrackTowerAvailableIcon.name,
      fireTowerAvailableIcon.name,
    ];

    const arrowIcons = [rightArrow.name, leftArrow.name, closeArrow.name];
    const dashboardIcons = [openAvailableTowerMenuIcon.name];

    switch (this.name) {
      case "startWaveIcon":
        pulse(this);
        break;
    }

    if (this.isClickable && this.isActivated) {
      if (
        avalaibleIconNames.includes(this.name) ||
        arrowIcons.includes(this.name) ||
        dashboardIcons.includes(this.name)
      ) {
        reversePulse(this);
      }
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
      dashboard.map.currentWaveList.length !== dashboard.map.waveList.length
    ) {
      return (this.isVisible = true);
    }
  }

  ghostIconInitialPosition(ghostIcon, availableTowerIcon) {
    ghostIcon.position.x = availableTowerIcon.position.x;
    ghostIcon.position.y = availableTowerIcon.position.y;
  }
}
