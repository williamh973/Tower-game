import { gameVariable } from "../../../../gameVariable.js";
import { waveHudMask } from "../../../../models/icon/icon.instance.js";
import { wave } from "../checkCampaignStep.js";

export const initWave = async (startWaveIcon) => {
  await wave.init();
  startWaveIcon.hidden();
  wave.start(startWaveIcon);
};

export const updateWaveHudMask = () => {
  waveHudMask.text =
    "🧟 VAGUES " +
    gameVariable.wave.currentWaveList.length +
    "/" +
    gameVariable.wave.waveList.length;
};
