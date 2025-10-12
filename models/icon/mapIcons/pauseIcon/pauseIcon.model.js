import { game } from "../../../../gameVariable.js";
import { Icon } from "../../icon.model.js";

export class PauseIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
    text,
    name
  ) {
    super(x, y, image, backgroundColor, width, height, isClickable, text, name);
  }

  toggle() {
    game.isPaused = !game.isPaused;
    game.isPaused ? (this.text = "▶") : (this.text = "❚❚");

    if (game.isPaused)
      setTimeout(() => {
        alert("Jeu mis en pause. Cliquez pour reprendre");
        game.isPaused = false;
        this.text = "❚❚";
      }, 100);
  }
}
