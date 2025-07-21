import { gameVariable } from "./gameVariable.js";
import { animate } from "./animate.js";
import { initBuildSpot } from "./spawnHandle/buildSpot/initBuildSpot.js";
import { Map } from "./models/map/map.model.js";
import { Wave } from "./models/wave/wave.model.js";
import {
  initHUDIcons,
  pauseDisplay,
  startWaveIcon,
  easyDifficultyIcon,
  mediumDifficultyIcon,
  hardDifficultyIcon,
  goldCoinIcon,
  waveHudMask,
  goldHudMask,
  lifeHudMask,
} from "./models/icon/icon.instance.js";
import { levelDifficultyScreen } from "./models/selectionScreen/selectionScreen.instance.js";

export const wave = new Wave(50);

export function initHUDText() {
  lifeHudMask.text = "❤️ " + gameVariable.playerStats.life;
  goldHudMask.text = "🪙 " + gameVariable.playerStats.goldCoin;
  waveHudMask.text =
    "🧟 VAGUES " +
    gameVariable.wave.currentWaveList.length +
    "/" +
    gameVariable.wave.waveList.length;

  pauseDisplay.text = gameVariable.ui.isGamePaused ? "▶" : "❚❚";
}

export const init = () => {
  gameVariable.campaign.campaignCurrentStep = 1;

  initHUDIcons();
  initHUDText();

  // gameVariable.ui.selectionScreenList.push(levelDifficultyScreen);

  // gameVariable.ui.iconList.push(
  //   easyDifficultyIcon,
  //    mediumDifficultyIcon,
  //   hardDifficultyIcon
  // );

  gameVariable.ui.iconList.push(
    startWaveIcon,
    lifeHudMask,
    goldHudMask,
    waveHudMask,
    pauseDisplay,
    goldCoinIcon
  );

  const map = new Map();
  gameVariable.campaign.mapList.push(map);

  gameVariable.wave.waveList.push(wave);
  animate();
  initBuildSpot();
};
init();
