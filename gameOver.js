import { gameVariable } from "./gameVariable.js";
import { lifeHudMask } from "./models/icon/icon.instance.js";

export const gameOver = () => {
  if (gameVariable.playerStats.life <= 0) {
    lifeHudMask.text = "❤️ " + gameVariable.playerStats.life;
    gameVariable.ui.isGameOver = true;
    alert("Game over");
  }
};
