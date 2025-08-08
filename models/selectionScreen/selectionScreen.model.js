import { context } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";

export class SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    this.position = position;
    this.image = image;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.name = name;
    this.scaleDirection = 1;
    this.buildMenuSlots = [];
    this.ghostTowerIcons = [];
    this.remainingBuildMenuSlots = 6;
    this.isGhostTowerPlaced = false;
  }
  draw() {
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

    if (this.buildMenuSlots.length > 0) {
      this.buildMenuSlots.forEach((buildMenuSlot) => {
        buildMenuSlot.draw();
      });
    }

    if (this.ghostTowerIcons.length > 0) {
      this.ghostTowerIcons.forEach((ghostTowerIcon) => {
        ghostTowerIcon.draw();
      });
    }
  }

  updateAnimation() {
    if (!gameVariable.preparation.isAvailableTowersMenuOpen) {
      this.buildSpotMenu();
    }
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

  close(element) {
    gameVariable.ui.selectionScreenList =
      gameVariable.ui.selectionScreenList.filter(
        (screen) => screen.image !== element
      );
  }

  setTowerToBuildSpotMenu(archerTower, availableTowerIcon) {
    if (!this.remainingBuildMenuSlots > 0)
      return console.log("inventaire plein");

    const ghostIcon = archerTower.buildSpotMenuTowerIcon;
    ghostIcon.position.x = availableTowerIcon.position.x;
    ghostIcon.position.y = availableTowerIcon.position.y;

    this.ghostTowerIcons.push(ghostIcon);

    window.onmousemove = function (e) {
      ghostIcon.position.x = e.clientX;
      ghostIcon.position.y = e.clientY;
      console.log("x", e.clientX, "y", e.clientY);
    };

    if (this.remainingBuildMenuSlots > 0) {
      this.remainingBuildMenuSlots--;
    }

    switch (this.remainingBuildMenuSlots) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        this.buildMenuSlots.push(ghostIcon);
        // console.log(icon);
        break;

      default:
        break;
    }
  }
}
