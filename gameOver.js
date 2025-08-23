import { gameVariable } from "./gameVariable.js";
import { lifeHudMask } from "./models/icon/mapIcons/mapIcons.instance.js";

export const gameOver = () => {
  if (gameVariable.game.player.life <= 0) {
    lifeHudMask.text = "❤️ " + gameVariable.game.player.life;
    gameVariable.game.player.hasLost = true;
    alert("Game over");
  }
};
