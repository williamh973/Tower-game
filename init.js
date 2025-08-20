import { gameVariable } from "./gameVariable.js";
import {
  pauseDisplay,
  waveHudMask,
  goldHudMask,
  lifeHudMask,
} from "./models/icon/icon.instance.js";
import { dashboard } from "./models/selectionScreen/selectionScreen.instance.js";

export const initHUDText = () => {
  lifeHudMask.text = "❤️ " + gameVariable.game.player.life;
  goldHudMask.text = "🪙 " + gameVariable.game.player.gold;
  waveHudMask.text =
    "🧟 VAGUES " +
    dashboard.map.currentWaveList.length +
    "/" +
    dashboard.map.waveList.length;

  pauseDisplay.text = gameVariable.game.isPaused ? "▶" : "❚❚";
};
