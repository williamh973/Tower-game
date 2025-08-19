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

export const loadCampaignStep = (iconName) => {
  const stepIcons = ["stepOneIcon"];
  if (!stepIcons.includes(iconName)) return console.log("ca passe paas");

  const initLevel = () => {
    gameVariable.ui.selectionScreenList = [];
    gameVariable.campaign.dashboardIconList = [];
  };

  switch (iconName) {
    case "stepOneIcon":
      gameVariable.campaign.mapList.push(new Map(theMapStepOne, 1));
      initLevel();
      break;

    default:
      break;
  }

  // gameVariable.battle.battleIconList.push(
  //   startWaveIcon,
  //   lifeHudMask,
  //   goldHudMask,
  //   waveHudMask,
  //   pauseDisplay,
  //   goldCoinIcon
  // );
  // initHUDText();
  // initBuildSpot();
  gameVariable.campaign.isStepLoaded = true;
};
