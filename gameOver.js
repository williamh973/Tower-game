import { gameVariable } from "./gameVariable.js";
import { lifeHudMask } from "./models/icon/icon.instance.js";

export const gameOver = () => {
  if (gameVariable.player.life <= 0) {
    lifeHudMask.text = "❤️ " + gameVariable.player.life;
    gameVariable.ui.isGameOver = true;
    alert("Game over");
  }
};
