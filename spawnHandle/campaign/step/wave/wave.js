import { gameVariable } from "../../../../gameVariable.js";
import { waveDisplay } from "../../../../models/icon/icon.instance.js";
import { wave } from "../../../../init.js";

export const initWave = async startWaveIcon => {
  await wave.init();
    startWaveIcon.hidden();
    wave.start(startWaveIcon);
};

export const updateWaveDisplay = () => {
    waveDisplay.text =
        "🧟 VAGUES " +
        gameVariable.wave.currentWaveList.length +
        "/" +
        gameVariable.wave.waveList.length;
};
