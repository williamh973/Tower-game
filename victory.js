import { game } from "./gameVariable.js";

export const ckeckIfPlayerVictory = (waveDemonDeads, unitMax) => {
  if (game.player.life >= 0 && waveDemonDeads >= unitMax) {
    game.player.hasWon = true;
    alert("Victory !");
  }
};
