import { context } from "../../../../animate.js";
import { Icon } from "../../icon.model.js";

export class TowerDetailsIcon extends Icon {
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

  drawTitle() {
    context.fillStyle = "gold";
    context.font = "bold 16px 'Palatino Linotype', 'Book Antiqua' ";
    context.fillText(this.title, this.position.x + 5, this.position.y + 18);
  }

  drawResume() {
    context.fillStyle = "whitesmoke";
    context.font = "14px 'cursive', 'Book Antiqua' ";
    context.fillText(this.text, this.position.x + 5, this.position.y + 38);
  }

  draw() {
    super.drawBlackMask();
    this.drawTitle();
    this.drawResume();

    const offSetY = 20;

    this.drawLoadingBar(
      this.position.x + 30,
      this.position.y + this.height - offSetY,
      this.loadingDamage,
      "yellow"
    );
    this.drawLoadingBar(
      this.position.x + 125,
      this.position.y + this.height - offSetY,
      this.loadingRate,
      "yellow"
    );
    this.drawLoadingBar(
      this.position.x + 225,
      this.position.y + this.height - offSetY,
      this.loadingRange,
      "yellow"
    );
  }

  drawLoadingBar(positionX, positionY, value, color) {
    const barWidth = 45;
    const barHeight = 7;

    context.fillStyle = "rgba(74, 74, 74, 0.25)";
    context.fillRect(positionX, positionY, barWidth - 2, barHeight - 2);

    const maxStatValue = 45;
    const normalizedValue = Math.min(
      (value / maxStatValue) * (barWidth - 2),
      barWidth - 2
    );

    context.fillStyle = color;
    context.fillRect(positionX, positionY, normalizedValue, barHeight - 2);
  }

  animateBars() {
    this.animateStat("loadingDamage", this.towerStats?.damages);
    this.animateStat("loadingRate", this.towerStats?.rate);
    this.animateStat("loadingRange", this.towerStats?.range);
  }

  animateStat(property, statValue) {
    this[property] = 0;
    const maxStatValue = 45;
    const normalizedMax = Math.min(statValue, maxStatValue);

    const timer = setInterval(() => {
      this[property]++;
      if (this[property] >= normalizedMax) clearInterval(timer);
    }, 20);
  }
}
