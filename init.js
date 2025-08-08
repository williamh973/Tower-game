import { gameVariable } from "./gameVariable.js";
import {
  pauseDisplay,
  waveHudMask,
  goldHudMask,
  lifeHudMask,
} from "./models/icon/icon.instance.js";

export const initHUDText = () => {
  lifeHudMask.text = "❤️ " + gameVariable.player.life;
  goldHudMask.text = "🪙 " + gameVariable.player.goldCoin;
  waveHudMask.text =
    "🧟 VAGUES " +
    gameVariable.wave.currentWaveList.length +
    "/" +
    gameVariable.wave.waveList.length;

  pauseDisplay.text = gameVariable.ui.isGamePaused ? "▶" : "❚❚";
};
