import { gameVariable } from "./gameVariable.js";

export const isCkeckIfPlayerVictory = (waveDemonDeadList, unitMax) => {
  if (gameVariable.playerStats.life >= 0 && waveDemonDeadList >= unitMax) {
    gameVariable.ui.isVictory = true;
    alert("Victory !");
  }
};
