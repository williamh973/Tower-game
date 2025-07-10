import { gameVariable } from "./gameVariable.js";
import { lifeDisplay } from "./models/icon/icon.instance.js";

export const gameOver = () => {
  if (gameVariable.playerStats.life <= 0) {
    lifeDisplay.text = "❤️ " + gameVariable.playerStats.life;
    gameVariable.ui.isGameOver = true;
    alert("Game over");
  }
};
