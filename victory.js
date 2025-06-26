import { gameVariable } from "./gameVariable.js";

export const isCkeckIfPlayerVictory = (demonList) => {
  if (demonList.length <= 0 && gameVariable.playerStats.life >= 0) {
    gameVariable.ui.isVictory = true;
    alert("Victory !");
  }
};
