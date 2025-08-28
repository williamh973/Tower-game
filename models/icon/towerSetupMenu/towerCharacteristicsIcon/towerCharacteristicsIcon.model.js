import { context } from "../../../../animate.js";
import { towerSetupMenu } from "../../../selectionScreen/selectionScreen.instance.js";
import { Icon } from "../../icon.model.js";

export class TowerCharacteristicsIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
    title,
    text = "",
    name = ""
  ) {
    super(x, y, image, backgroundColor, width, height, isClickable, text, name);

    this.title = title;
    this.towerStats = null;
    this.icons = [];
    this.loadingDamage = 0;
    this.loadingRate = 0;
    this.loadingRange = 0;
  }

  draw() {
    super.drawBlackMask();
    context.fillStyle = "gold";
    context.font = "bold 16px 'Palatino Linotype', 'Book Antiqua' ";
    context.fillText(this.title, this.position.x + 5, this.position.y + 18);

    context.fillStyle = "whitesmoke";
    context.font = "14px 'cursive', 'Book Antiqua' ";
    context.fillText(this.text, this.position.x + 5, this.position.y + 38);

    this.drawLoadingBar(
      this.position.x + 35,
      this.position.y + this.height - 30,
      this.loadingDamage,
      "#FF00E9"
    );
    this.drawLoadingBar(
      this.position.x + 135,
      this.position.y + this.height - 30,
      this.loadingRate,
      "#FF00E9"
    );
    this.drawLoadingBar(
      this.position.x + 235,
      this.position.y + this.height - 30,
      this.loadingRange,
      "#FF00E9"
    );
  }

  drawLoadingBar(positionX, positionY, value, color) {
    const barWidth = 50;
    const barHeight = 7;

    context.fillStyle = "#4A4A4A";
    context.fillRect(positionX, positionY, barWidth, barHeight);

    context.fillStyle = "black";
    context.fillRect(positionX + 1, positionY + 1, barWidth - 2, barHeight - 2);

    const maxStatValue = 150;
    const normalizedValue = Math.min(
      (value / maxStatValue) * (barWidth - 4),
      barWidth - 4
    );

    context.fillStyle = color;
    context.fillRect(
      positionX + 2,
      positionY + 2,
      normalizedValue,
      barHeight - 4
    );
  }

  animateBars() {
    this.loadingDamage = 0;
    this.loadingRate = 0;
    this.loadingRange = 0;
    this.handleLoadingTime();
  }

  handleLoadingTime() {
    this.animateStat("loadingDamage", this.towerStats?.damages, 20);
    this.animateStat("loadingRate", this.towerStats?.rate, 20);
    this.animateStat("loadingRange", this.towerStats?.range, 20);
  }

  animateStat(property, statValue, interval) {
    this[property] = 0;

    // tu normalises directement
    const maxStatValue = 150;
    const normalizedMax = Math.min(statValue, maxStatValue);

    const timer = setInterval(() => {
      this[property]++;
      if (this[property] >= normalizedMax) {
        clearInterval(timer);
      }
    }, interval);
  }
}
