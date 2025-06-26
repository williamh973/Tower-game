import { gameVariable } from "./gameVariable.js";

export const gameOver = () => {
  if (gameVariable.playerStats.life <= 0) {
    gameVariable.ui.isGameOver = true;
    alert("Game over");
  }
};
