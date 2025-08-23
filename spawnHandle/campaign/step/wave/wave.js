import { waveHudMask } from "../../../../models/icon/mapIcons/mapIcons.instance.js";
import { dashboard } from "../../../../models/selectionScreen/selectionScreen.instance.js";
import { wave } from "../checkCampaignStep.js";

export const initWave = async (startWaveIcon) => {
  await wave.init();
  startWaveIcon.hidden();
  wave.start(startWaveIcon);
};

export const updateWaveHudMask = () => {
  waveHudMask.text =
    "🧟 VAGUES " +
    dashboard.map.currentWaveList.length +
    "/" +
    dashboard.map.waveList.length;
};
