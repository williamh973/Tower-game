import { gameVariable } from "./gameVariable.js";

export const togglePause = (icon) => {
  gameVariable.game.isPaused = !gameVariable.game.isPaused;
  gameVariable.game.isPaused ? (icon.text = "▶") : (icon.text = "❚❚");

  if (gameVariable.game.isPaused) {
    setTimeout(() => {
      alert("Jeu mis en pause. Cliquez pour reprendre");
      gameVariable.game.isPaused = false;
      icon.text = "❚❚";
    }, 100);
  }
};
