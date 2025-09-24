import { gameVariable } from "./gameVariable.js";

export const ckeckIfPlayerVictory = (waveDemonDeadList, unitMax) => {
  if (gameVariable.game.player.life >= 0 && waveDemonDeadList >= unitMax) {
    gameVariable.game.player.hasWon = true;
    alert("Victory !");
  }
};
