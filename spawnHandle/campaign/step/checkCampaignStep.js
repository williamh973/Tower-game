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
import { dashboard } from "../../../models/selectionScreen/selectionScreen.instance.js";
import { Wave } from "../../../models/wave/wave.model.js";
import { initBuildSpot } from "../../buildSpot/initBuildSpot.js";

let maxUnit = 50;
export let wave = new Wave(maxUnit);

export const loadCampaignStep = (iconName) => {
  const stepIcons = ["stepOneIcon"];
  if (!stepIcons.includes(iconName)) return console.log("ca passe paas");

  const initLevel = () => {
    gameVariable.game.selectionScreenList = [];
    dashboard.icons = [];
  };

  switch (iconName) {
    case "stepOneIcon":
      dashboard.map = new Map(theMapStepOne, 10);
      initLevel();
      break;

    default:
      break;
  }

  dashboard.map.icons.push(
    startWaveIcon,
    lifeHudMask,
    goldHudMask,
    waveHudMask,
    pauseDisplay,
    goldCoinIcon
  );
  initHUDText();
  initBuildSpot();
  dashboard.isStepLoaded = true;
};
