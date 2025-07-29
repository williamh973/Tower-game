import { theMapStepOne } from "../../../assets/backImg.asset.js";
import { gameVariable } from "../../../gameVariable.js";
import { initHUDText } from "../../../init.js";
import {
  goldCoinIcon,
  goldHudMask,
  lifeHudMask,
  pauseDisplay,
  startWaveIcon,
  waveHudMask,
} from "../../../models/icon/icon.instance.js";
import { Map } from "../../../models/map/map.model.js";
import { Wave } from "../../../models/wave/wave.model.js";
import { initBuildSpot } from "../../buildSpot/initBuildSpot.js";

let maxUnit = 50;
export let wave = new Wave(maxUnit);

export const loadCampaignStep = () => {
  switch (gameVariable.campaign.campaignCurrentStep) {
    case 1:
      const map = new Map(theMapStepOne);
      gameVariable.wave.waveList.push(wave);

      gameVariable.campaign.mapList.push(map);
      gameVariable.ui.iconList.push(
        startWaveIcon,
        lifeHudMask,
        goldHudMask,
        waveHudMask,
        pauseDisplay,
        goldCoinIcon
      );
      initHUDText();
      initBuildSpot();
      gameVariable.campaign.isStepLoaded = true;
      break;

    default:
    // code
  }
};
